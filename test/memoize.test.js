import memoize from '../src/memoize'

describe('memoize', () =>{
  test('placeholder', () =>{
    const object = { 'a': 1, 'b': 2 };
    const other = { 'c': 3, 'd': 4 };
    const values = memoize(values);
    expect(values(object)).toStrictEqual([1, 2]);
    expect(values(other)).toStrictEqual([3, 4]);
    object.a = 2
    expect(values(object)).toStrictEqual([1, 2]);
    values.cache.set(object, ['a', 'b'])
    expect(values(object)).toStrictEqual(['a', 'b']);
    memoize.Cache = WeakMap
  });
});
