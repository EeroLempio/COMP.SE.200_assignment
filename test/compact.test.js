import compact from '../src/compact'

describe('compact', () =>{
  test('falsey values', () =>{
    /* FAILS
    Doesn't even return a single level array for a simple array of numbers,
    eq.
    [ 2, 3, 4, 5, 6, '-1': 1 ] for [1, 2, 3, 4, 5, 6]
    expect(compact([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(compact([0, 1, false, 2, '', 3, null, 4, "", 5, undefined, 6, NaN])).toStrictEqual([1, 2, 3, 4, 5, 6]);
    */
  });
});
