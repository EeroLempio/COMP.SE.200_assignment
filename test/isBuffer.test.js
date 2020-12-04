import isBuffer from '../src/isBuffer'

describe('isBuffer', () =>{
  test('value is buffer', () =>{
    expect(isBuffer(new Buffer(2))).toStrictEqual(true);
  });
  test('value is not buffer', () =>{
    expect(isBuffer(new Uint8Array(2))).toStrictEqual(false);
  });
});
