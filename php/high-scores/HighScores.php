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

class HighScores
{
    public array $scores;
    public int $latest;
    public int $personalBest;
    public array $personalTopThree;

    public function __construct(array $scores)
    {
        $this->scores = $scores;

        $this->latest = $this->computeLatest($this->scores);
        $this->personalBest = $this->computePersonalBest($this->scores);
        $this->personalTopThree = $this->computePersonalTopThree($this->scores);
    }

    /*
    * @param int[] $scores List of scores
    * @return int Latest score
    */
    protected function computeLatest(array $scores): int
    {
        return array_pop($scores);
    }

    /*
    * @param int[] $scores List of scores 
    * @ return int Personal best scores
    */
    protected function computePersonalBest(array $scores): int
    {
        $personalBest = 0;

        foreach ($scores as $score) {
            if ($score > $personalBest) {
                $personalBest = $score;
            }
        }

        return $personalBest;
    }

    /*
    * @param int[] $scores List of scores
    * @return int Top three personal best scores.
    */
    protected function computePersonalTopThree(array $scores): array
    {
        $personalTopThree = [];

        rsort($scores, SORT_NUMERIC);

        foreach(array_splice($scores, 0, 3) as $score) {
            $personalTopThree[] = $score;
        }

        return $personalTopThree;
    }
}
