import difference from '../src/difference'

describe('difference', () =>{
  test('legal array and values to be excluded', () =>{
    expect(difference([2, 1], [2, 3])).toStrictEqual([1]);
    expect(difference([1, 2, 3, 4, 5, 6, 7,], [2, 3], [3, 4], [7, 1])).toStrictEqual([5, 6]);
  });
  test('exclude values not in the "array to inspect"', () =>{
    expect(difference([2, 1], [2, 3, 5])).toStrictEqual([1]);
  });
  test('non number values"', () =>{
    expect(difference(['foo', 1, 5, 6], [2, 'bar', 5])).toStrictEqual(['foo', 1, 6]);
    expect(difference(['foo', null, 5, 6], [2, 'foo', NaN])).toStrictEqual([null, 5, 6]);
    expect(difference([], [NaN])).toStrictEqual([]);
    expect(difference([undefined], [])).toStrictEqual([undefined]);
  });
});
