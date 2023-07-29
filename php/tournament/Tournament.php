<?php

/*
 * By adding type hints and enabling strict type checking, code can become
 * easier to read, self-documenting and reduce the number of potential bugs.
 * By default, type declarations are non-strict, which means they will attempt
 * to change the original type to match the type specified by the
 * type-declaration.
 *
 * In other words, if you pass a string to a function requiring a float,
 * it will attempt to convert the string value to a float.
 *
 * To enable strict mode, a single declare directive must be placed at the top
 * of the file.
 * This means that the strictness of typing is configured on a per-file basis.
 * This directive not only affects the type declarations of parameters, but also
 * a function's return type.
 *
 * For more info review the Concept on strict type checking in the PHP track
 * <link>.
 *
 * To disable strict typing, comment out the directive below.
 */

declare(strict_types=1);

class Tournament
{
    /**
     * @var array <string, int>
     */
    public array $score_table;

    public string $header;

    public function __construct()
    {
        $this->score_table = [
            "MP" => 0, "W" => 0, "D" => 0, "L" => 0, "P" => 0,
        ];

        $this->header = "Team                           | MP |  W |  D |  L |  P";
    }

    public function parse_scores(array $scores) : string
    {
        $score_table = $this->header . "\n";

        foreach($scores as $team => $score) {
            $score_table .=
                str_pad($team, 31) . 
                "|  " . 
                $score["MP"] . 
                " |  " . 
                $score["W"] . 
                " |  ". 
                $score["D"] . 
                " |  ". 
                $score["L"] . 
                " |  ". 
                $score["P"] . 
                "\n";
        }

        return substr($score_table, 0, -1);
    }

    public function tally(string $score_table) : string
    {
        if ($score_table === "") return $this->header;

        $scores = [];

        foreach(explode("\n", $score_table) as $score)
        {
            [$first_team, $second_team, $result] = explode(";", $score);
            
            if (!array_key_exists($first_team, $scores)) {
                $scores[$first_team] = $this->score_table;
            }
            if (!array_key_exists($second_team, $scores)) {
                $scores[$second_team] = $this->score_table;
            }

            $scores[$first_team]["MP"] += 1;
            $scores[$second_team]["MP"] += 1;

            switch($result) {
                case $result === "win":
                    $scores[$first_team]["P"] += 3;
                    $scores[$first_team]["W"] += 1;
                    $scores[$second_team]["L"] +=1;
                    break;
                case $result === "loss":
                    $scores[$second_team]["P"] += 3;
                    $scores[$second_team]["W"] += 1;
                    $scores[$first_team]["L"] += 1;
                    break;
                case $result === "draw":
                    $scores[$first_team]["P"] += 1;
                    $scores[$second_team]["P"] += 1;
                    $scores[$first_team]["D"] += 1;
                    $scores[$second_team]["D"] += 1;
                    break;
            }
        }

        ksort($scores);
        uasort($scores, static fn ($a, $b) => $b["P"] - $a["P"]);
        return $this->parse_scores($scores);
    }
}
