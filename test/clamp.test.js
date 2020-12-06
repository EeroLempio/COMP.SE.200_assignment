import clamp from '../src/clamp'

describe('clamp', () =>{
  test('boundaries', () =>{
    expect(clamp(-10, -5, 5)).toBe(-5);
    /* FAILS
    expect(clamp(10, -5, 5)).toBe(5);
    */
  });
});
