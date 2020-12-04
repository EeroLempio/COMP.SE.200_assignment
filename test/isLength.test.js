import isLength from '../src/isLength'

describe('isLength', () =>{
  test('return true if value is a valid length', () =>{
    expect(isLength(3)).toStrictEqual(true);
  });
  test('return false if value is not a valid length', () =>{
    expect(isLength(Number.MIN_VALUE)).toStrictEqual(false);
    expect(isLength(Infinity)).toStrictEqual(false);
    expect(isLength('3')).toStrictEqual(false);
  });
});
