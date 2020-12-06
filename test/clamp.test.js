import clamp from '../src/clamp'

describe('clamp', () =>{
  test('boundaries', () =>{
    expect(clamp(-10, -5, 5)).toBe(-5);
    //expect(clamp(10, -5, 5)).toBe(5);
  });
});
