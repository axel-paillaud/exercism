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
        //error_log to debug phpunit
        
        $initials_a = $this->initials($sweetheart_a);
        $initials_b = $this->initials($sweetheart_b);

        return 
"     ******       ******
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
              *"; 

    }
}
