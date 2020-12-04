import isBoolean from '../src/isBoolean'

describe('isBoolean', () =>{
  test('is boolean', () =>{
    expect(isBoolean(false)).toStrictEqual(true);
  });
  test('is not boolean', () =>{
    expect(isBoolean(null)).toStrictEqual(false);
  });
});
