/* eslint-env jest */

import { Lorenz } from '../src/js/lorenz';

test('It works with default starting coordinates', () => {
    const lorenz = Lorenz();
    expect(lorenz.get('xyz')).toEqual({ 'x': 2.0, 'y': 3.0, 'z': 4.0 });
});

test('It accepts starting coordinates', () => {
    const lorenz = Lorenz(2.5, 3.5, 4.5);
    expect(lorenz.get('xyz')).toEqual({ 'x': 2.5, 'y': 3.5, 'z': 4.5 });
});

test('It returns partial results', () => {
    const lorenz = Lorenz();
    expect(lorenz.get('xz')).toEqual({ 'x': 2.0, 'z': 4.0 });
});

test('It returns (non deterministic) results within the expected range', () => {
    // TODO:
    // It would be better to do inly 100 iterations BUT run the test 10 times
    // with random starting coords within the expected range
    const lorenz = Lorenz();
    const min = { 'x': -25, 'y': -30, 'z': 0 };
    const max = { 'x': 25, 'y': 30, 'z': 60 };
    for (let t = 0; t < 1000; t++) {
        var result = lorenz.nextValue();
        Object.keys(result).forEach(function (axis) {
            expect(result[axis]).toBeLessThan(max[axis]);
            expect(result[axis]).toBeGreaterThan(min[axis]);
        });
    }
});
