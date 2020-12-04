import isObject from '../src/isObject'

describe('isObject', () =>{
  test('return true if value is an object', () =>{
    expect(isObject({})).toStrictEqual(true);
    expect(isObject([1, 2, 3])).toStrictEqual(true);
    expect(isObject(Function)).toStrictEqual(true);
  });
  test('return false if value is not an object', () =>{
    expect(isObject(null)).toStrictEqual(false);
  });
});
