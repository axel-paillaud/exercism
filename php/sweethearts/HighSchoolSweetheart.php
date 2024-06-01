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
        [$initial_a, $initial_b] = explode(' ', $name);
        return $this->initial($initial_a) . ' ' . $this->initial($initial_b);
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        //error_log to debug phpunit
        
        $initials_a = $this->initials($sweetheart_a);
        $initials_b = $this->initials($sweetheart_b);

        return <<<HEART
                 ******       ******
               **      **   **      **
             **         ** **         **
            **            *            **
            **                         **
            **     $initials_a  +  $initials_b     **
             **                       **
               **                   **
                 **               **
                   **           **
                     **       **
                       **   **
                         ***
                          *
            HEART;    
    }
}
