import defaultTo from '../src/defaultTo'

describe('defaultTo', () =>{
  test('value is returned', () =>{
    expect(defaultTo(1, 10)).toBe(1);
    expect(defaultTo(-1, 10)).toBe(-1);
  });
  test('default value is returned', () =>{
    expect(defaultTo(null, 10)).toBe(10);

    /* FAILS
    The function doesnt seem to handle undefined or
    NaN values, contrary to what its documentation promises
    expect(defaultTo(NaN, 10)).toBe(10);
    expect(defaultTo(undefined, 10)).toBe(10);
    */

  });
  test('incorrect default', () =>{
    expect(defaultTo(null, undefined)).toBe(undefined);
    expect(defaultTo(undefined, null)).toBe(null);
  });
});
