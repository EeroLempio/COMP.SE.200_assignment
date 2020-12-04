import isObjectLike from '../src/isObjectLike'

describe('isObjectLike', () =>{
  test('Return true if value is object-like', () =>{
    expect(isObjectLike({})).toStrictEqual(true);
    expect(isObjectLike([1, 2, 3])).toStrictEqual(true);
  });
  test('Return false if value is not object-like', () =>{
    expect(isObjectLike(Function)).toStrictEqual(false);
    expect(isObjectLike(null)).toStrictEqual(false);
  });
});
