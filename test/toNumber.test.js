import toNumber from '../src/toNumber'

describe('toNumber', () =>{
  test('convert value to number', () =>{
    expect(toNumber(3.2)).toStrictEqual(3.2);
    expect(toNumber(Number.MIN_VALUE)).toStrictEqual(5e-324);
    expect(toNumber(Infinity)).toStrictEqual(Infinity);
    expect(toNumber('3.2')).toStrictEqual(3.2);
  });
});
