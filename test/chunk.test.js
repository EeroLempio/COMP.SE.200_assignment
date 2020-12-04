import chunk from '../src/chunk'

describe('chunk', () =>{
  test('returns an array with chunks the length of size param', () =>{
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']]);
    expect(chunk(['a', 'b', 'c', 'd'], 0)).toStrictEqual([]);
  });
});
