import { BLUE, GREEN, ORANGE, PURPLE, RED, WHITE, YELLOW } from './Colors.js';
import { getColorByRemainingTime, getNextRemainingTime } from './Utils';

test('time remining less than 11 should return red', () => {
    const color = getColorByRemainingTime(1);
    expect(color).toEqual(RED);
});

test('time remining between 12 and 21 should return orange', () => {
    const color = getColorByRemainingTime(14);
    expect(color).toEqual(ORANGE);
});

test('time remining between 22 and 31 should return yellow', () => {
    const color = getColorByRemainingTime(25);
    expect(color).toEqual(YELLOW);
});

test('time remining between 32 and 41 should return green', () => {
    const color = getColorByRemainingTime(33);
    expect(color).toEqual(GREEN);
});

test('time remining between 42 and 51 should return blue', () => {
    const color = getColorByRemainingTime(45);
    expect(color).toEqual(BLUE);
});

test('time remining between 52 and 60 should return purple', () => {
    const color = getColorByRemainingTime(55);
    expect(color).toEqual(PURPLE);
});

test('time remining greater than 60 should return white', () => {
    const color = getColorByRemainingTime(61);
    expect(color).toEqual(WHITE);
});

test('getNextRemainingTime should return number minor than 60', () => {
    const seconds = getNextRemainingTime();
    expect(seconds).toBeLessThan(60);
});