import endsWith from '../src/endsWith'

describe('endsWith', () =>{
  test('default length', () =>{
    expect(endsWith('abc', 'c')).toBe(true);
    expect(endsWith('abc', 'b')).toBe(false);
  });
  test('non-default length', () =>{
    expect(endsWith('abc', 'b', 2)).toBe(true);
    //expect(endsWith('abc', 'abc', 2)).toBe(true);
    expect(endsWith('abc', 'abc', -2)).toBe(false);
    expect(endsWith('abc', 'abc', 4)).toBe(true);
  });
});
