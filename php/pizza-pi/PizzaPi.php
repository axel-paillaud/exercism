<?php

const SAUCE_PER_PIZZA = 125;
const DOUGH_PER_PIZZA = 200;
const SLICE_PER_PIZZA  = 8;

class PizzaPi
{
    public function calculateDoughRequirement($pizzas, $persons)
    {
        $more_dough_required_per_person = 20;
        return $pizzas * (
            ($persons * $more_dough_required_per_person) + DOUGH_PER_PIZZA
        );
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
        return floor(($cheese_dimension**3) / ($cheese_thickness * M_PI * $pizza_diameter));
    }

    public function calculateLeftOverSlices($number_of_pizzas, $number_of_friends)
    {
        return ($number_of_pizzas * SLICE_PER_PIZZA) % $number_of_friends;
    }
}
