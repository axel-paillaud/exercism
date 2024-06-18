<?php

const TOTAL_COOK_DURATION = 40;
const TIME_PER_LAYER = 2;
const ALARM_MESSAGE = "Ding!";

class Lasagna
{
    public function expectedCookTime()
    {
        return TOTAL_COOK_DURATION;
    }

    public function remainingCookTime($elapsed_minutes)
    {
        return $this->expectedCookTime() - $elapsed_minutes;
    }

    public function totalPreparationTime($layers_to_prep)
    {
        return $layers_to_prep * TIME_PER_LAYER;
    }

    public function totalElapsedTime($layers_to_prep, $elapsed_minutes)
    {
        return $this->totalPreparationTime($layers_to_prep) + $elapsed_minutes;
    }

    public function alarm()
    {
        return ALARM_MESSAGE;
    }
}
