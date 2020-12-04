import isEmpty from '../src/isEmpty'

describe('isEmpty', () =>{
  test('return true if value is empty', () =>{
    expect(isEmpty(null)).toStrictEqual(true);
    expect(isEmpty(true)).toStrictEqual(true);
    expect(isEmpty(null)).toStrictEqual(true);
  });
  test('return false if value is not empty', () =>{
    expect(isEmpty([1, 2, 3])).toStrictEqual(false);
    expect(isEmpty('abc')).toStrictEqual(false);
    expect(isEmpty({ 'a': 1 })).toStrictEqual(false);
  });
});
