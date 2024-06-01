<?php

const SAUCE_PER_PIZZA = 125;
const DOUGH_PER_PIZZA = 200;
const PI = 3.14;

class PizzaPi
{
    public function calculateDoughRequirement($pizzas, $persons)
    {
        $more_dough_required_per_person = 20;
        return $pizzas * (($persons * $more_dough_required_per_person) + DOUGH_PER_PIZZA);
    }

    public function calculateSauceRequirement($pizzas, $canSize)
    {
        return $pizzas * SAUCE_PER_PIZZA / $canSize;
    }

    public function calculateCheeseCubeCoverage(
        $cheese_dimension, 
        $cheese_thickness, 
        $pizza_diameter
    )
    {
        return floor(($cheese_dimension**3) / ($cheese_thickness * PI * $pizza_diameter));
    }

    public function calculateLeftOverSlices()
    {
        throw new \BadFunctionCallException("Implement the function");
    }
}
