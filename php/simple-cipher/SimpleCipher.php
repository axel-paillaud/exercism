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

const ASCII_EXTENT = 26;
const ASCII_FIRST_LETTER = 97;
const ASCII_LAST_LETTER = 122;

function randomKey(int $length) : string
{
    $keys = [];
    for ($i = 0; $i < $length; $i++) {
        $randomAscii = random_int(ASCII_FIRST_LETTER, ASCII_LAST_LETTER);
        $keys[] = sprintf('%c', $randomAscii);
    }

    return implode('', $keys);
}

class SimpleCipher
{
    public string $key;

    public function __construct(string|null $key = null)
    {
        if ($key === null) $key = randomKey(20);

        else {
            if ($key === '') throw new InvalidArgumentException();
            for ($i = 0; $i < mb_strlen($key); $i++) {
                if (
                        ord($key[$i]) < ASCII_FIRST_LETTER || 
                        ord($key[$i]) > ASCII_LAST_LETTER
                    ) throw new InvalidArgumentException();
            }
        }

        $this->key = $key;
    }

    public function getOffset(string $keyChar) : int
    {
        return ord($keyChar) - ASCII_FIRST_LETTER;
    }

    public function encode(string $plainText): string
    {
        $cipher = [];
        for ($i = 0; $i < mb_strlen($plainText); $i++) {
            $asciiCode = ord($plainText[$i]);
            $offset = $this->getOffset($this->key[$i]);
            
            $asciiCode += $offset;

            // After z letter, loop over trough the alphabet
            if ($asciiCode > ASCII_LAST_LETTER) $asciiCode -= ASCII_EXTENT;

            $cipher[] = sprintf('%c', $asciiCode);
        }

        return implode('', $cipher);
    }

    public function decode(string $cipherText): string
    {
        $plainText = [];
        for ($i = 0; $i < mb_strlen($cipherText); $i++) {
            $asciiCode = ord($cipherText[$i]);
            $offset = $this->getOffset($this->key[$i]);

            $asciiCode -= $offset;

            // After z letter, loop over trough the alphabet
            if ($asciiCode < ASCII_FIRST_LETTER) $asciiCode += 26;

            $plainText[] = sprintf('%c', $asciiCode);

        }
        
        return implode('', $plainText);
    }
}
