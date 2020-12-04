import toInteger from '../src/toInteger'

describe('toInteger', () =>{
  test('convert value to integer', () =>{
    expect(toInteger(3.2)).toStrictEqual(3);
    expect(toInteger(Number.MIN_VALUE)).toStrictEqual(0);
    expect(toInteger(Infinity)).toStrictEqual(1.7976931348623157e+308);
    expect(toInteger('3.2')).toStrictEqual(3);
  });
});
