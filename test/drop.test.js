import drop from '../src/drop'

describe('drop', () =>{
  test('drop with default param', () =>{
    expect(drop([1, 2, 3])).toStrictEqual([2, 3]);
  });
  test('drop n elements', () =>{
    expect(drop([1, 2, 3], 2)).toStrictEqual([3]);
    expect(drop([1, 2, 3], 5)).toStrictEqual([]);
    expect(drop([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
  });
  test('non-values', () =>{
    expect(drop([null, 2, 3], 2)).toStrictEqual([3]);
    expect(drop([1, undefined, 3], 5)).toStrictEqual([]);
    expect(drop([1, NaN, 3], 0)).toStrictEqual([1, NaN, 3]);
    expect(drop([1, 2, 3], null)).toStrictEqual([1, 2, 3]);
  });
});
