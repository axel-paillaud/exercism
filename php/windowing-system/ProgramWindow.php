<?php

class ProgramWindow
{
    public $x;
    public $y;
    public $width;
    public $height;

    function __construct()
    {
        $this->x = 0; 
        $this->y = 0;
        $this->width = 800;
        $this->height = 600;
    }

    public function resize($size)
    {
        $this->width = $size->width;
        $this->height = $size->height;
    }

    public function move($position)
    {
        $this->x = $position->x; 
        $this->y = $position->y; 
    }
}

class Size
{
    public $width;
    public $height;

    function __construct($height, $width)
    {
        $this->width = $width; 
        $this->height = $height;
    }
}

class Position
{
    public $x;
    public $y;

    function __construct($y, $x)
    {
        $this->x = $x;
        $this->y = $y;
    }
}
