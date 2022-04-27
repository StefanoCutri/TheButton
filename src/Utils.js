import { BLUE, GREEN, ORANGE, PURPLE, RED, WHITE, YELLOW } from './Colors.js';

export const getColorByRemainingTime = (remainingTime) => {
    var selectedColor = WHITE;
    if (remainingTime <= 11) {
        selectedColor = RED;
    } else if (remainingTime <= 21) {
        selectedColor = ORANGE;
    } else if (remainingTime <= 31) {
        selectedColor = YELLOW;
    } else if (remainingTime <= 41) {
        selectedColor = GREEN;
    } else if (remainingTime <= 51) {
        selectedColor = BLUE;
    } else if (remainingTime <= 60) {
        selectedColor = PURPLE;
    }

    return selectedColor;
};

export const getNextRemainingTime = () => {
    return Math.floor(Math.floor(Math.random() * 59) + 1);
};