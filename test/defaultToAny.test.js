import defaultToAny from '../src/defaultToAny'

describe('defaultToAny', () =>{
  test('value is returned', () =>{
    expect(defaultToAny(1, 10, 20 , 30)).toBe(1);
    expect(defaultToAny(-1, null, NaN, undefined)).toBe(-1);
  });
  test('default value is returned', () =>{
    //expect(defaultToAny(NaN, 10)).toBe(10);
    expect(defaultToAny(undefined, 10)).toBe(10);
    //expect(defaultToAny(NaN, null, 10)).toBe(10);
    //expect(defaultToAny(undefined, NaN, null, 10)).toBe(10);
    //expect(defaultToAny(NaN, NaN, 10, null)).toBe(10);
    expect(defaultToAny(undefined, 10, NaN, null)).toBe(10);
  });
  test('incorrect default', () =>{
    expect(defaultToAny(null, undefined)).toBe(undefined);
    expect(defaultToAny(undefined, null)).toBe(null);
    expect(defaultToAny(undefined, null, NaN)).toBe(NaN);
  });
});
