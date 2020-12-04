import isArrayLikeObject from '../src/isArrayLikeObject'

describe('isArrayLikeObject', () =>{
  test('is value array-like and an object', () =>{
    expect(isArrayLikeObject([1, 2, 3])).toStrictEqual(true);
    expect(isArrayLikeObject(document.body.children)).toStrictEqual(true);
    expect(isArrayLikeObject('abc')).toStrictEqual(false);
    expect(isArrayLikeObject(Function)).toStrictEqual(false);
  });
});
