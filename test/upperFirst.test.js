import upperFirst from '../src/upperFirst'

describe('upperFirst', () =>{
  test('Convert first character in a string to upper case', () =>{
    expect(upperFirst('fred')).toStrictEqual('Fred');
    expect(upperFirst('FRED')).toStrictEqual('FRED');
  });
});
