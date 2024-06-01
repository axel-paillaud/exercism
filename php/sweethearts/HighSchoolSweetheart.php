<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        return trim($name)[0];
    }

    public function initial(string $name): string
    {
        return strtoupper($this->firstLetter($name)) . '.';
    }

    public function initials(string $name): string
    {
        // find a solution to destruct this array into first_name and last_name
        $exploded_string = explode(' ', $name);
        return $this->initial($exploded_string[0]) . ' ' . $this->initial($exploded_string[1]);
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        print("sweetheart_a :");
        print($sweetheart_a);

        print("sweetheart_b :");
        print($sweetheart_b);

        return "hello";
    }
}
