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
        throw new \BadFunctionCallException("Implement the function");
    }

    public function validate(string $input): string
    {
        throw new \BadFunctionCallException("Implement the function");
    }
}
