const { add, multiply, subtract } = require( './index' );

test( 'adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test( 'adds 5 + 7 to equal 12', () => {
    expect(add(5, 7)).toBe(12);
});

test( 'multiply 9 x 8 to equal 72', () => {
    expect(multiply(9, 8)).toBe(72);
});

test( 'subtracts 15 - 10 to equal 5', () => {
    expect(subtract(15, 10)).toBe(5);
});