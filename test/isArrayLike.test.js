import isArrayLike from '../src/isArrayLike'

describe('isArrayLike', () =>{
  test('is value array-like', () =>{
    expect(isArrayLike([1, 2, 3])).toStrictEqual(true);
    expect(isArrayLike(document.body.children)).toStrictEqual(true);
    expect(isArrayLike('abc')).toStrictEqual(true);
    expect(isArrayLike(Function)).toStrictEqual(false);
  });
});
