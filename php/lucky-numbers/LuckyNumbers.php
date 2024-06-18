<?php

class LuckyNumbers
{
    public function sumUp(array $digitsOfNumber1, array $digitsOfNumber2): int
    {
        $letters_1 = '';
        $letters_2 = '';

        foreach ($digitsOfNumber1 as $digit) {
            $letters_1 .= (string) $digit;
        } 

        foreach ($digitsOfNumber2 as $digit) {
            $letters_2 .= (string) $digit;
        }

        return (int) $letters_1 + (int) $letters_2;
    }

    public function isPalindrome(int $number): bool
    {
        return (string) $number === strrev((string) $number);
    }

    public function validate(string $input): string
    {
        if ($input === '') return 'Required field';
        else if ((int) $input <= 0) return 'Must be a whole number larger than 0';

        return '';
    }
}
