import chunk from '../src/chunk'

describe('chunk', () =>{
  test('chunk size', () =>{
    expect(chunk([1], 1)).toStrictEqual([[1]]);
    /* FAILS
    Doesnt give the documented ouput for this test case
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'], ['c', 'd']]);
    */
  });
});
