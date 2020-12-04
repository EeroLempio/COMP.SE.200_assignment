import isTypedArray from  '../src/isTypedArray'

describe('isTypedArray', () =>{
  test('Return true if value is a typed array', () =>{
    expect(isTypedArray(new Uint8Array)).toStrictEqual(true);
  });
  test('Return false if value is not a typed array', () =>{
    expect(isTypedArray([])).toStrictEqual(false);
  });
});
