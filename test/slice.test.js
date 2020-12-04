import slice from '../src/slice'

describe('slice', () =>{
  test('returns sliced array with starting from start param and ending with end param', () =>{
    var array = [1, 2, 3, 4]
    expect(slice(array, 2)).toStrictEqual([3, 4]);
    expect(slice(array, -2)).toStrictEqual([3, 4]);
    expect(slice(array, 2, -1)).toStrictEqual([3]);
    expect(slice([], 2)).toStrictEqual([]);
  });
});
