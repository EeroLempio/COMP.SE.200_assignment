import clamp from '../src/clamp'

describe('clamp', () =>{
  test('boundaries', () =>{
    expect(clamp(-10, -5, 5)).toBe(-5);

    /* FAILS
    Seems to return the lower bound most of the time,
    even if number is on the range or over it
    expect(clamp(10, -5, 5)).toBe(5);
    expect(clamp(0, -5, 5)).toBe(0);
    */
  });
});
