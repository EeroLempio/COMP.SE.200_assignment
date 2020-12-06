import toString from '../src/toString'

describe('toString', () =>{
  test('convert value to a string', () =>{
    expect(toString(null)).toStrictEqual('null');
    expect(toString(-0)).toStrictEqual('-0');
    expect(toString([1, 2, 3])).toStrictEqual('1,2,3');
  });
});
