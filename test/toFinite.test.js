import toFinite from '../src/toFinite'

describe('toFinite', () =>{
  test('Turn value to a finite value', () =>{
    expect(toFinite(3.2)).toStrictEqual(3.2);
    expect(toFinite(Number.MIN_VALUE)).toStrictEqual(5e-324);
    expect(toFinite(Infinity)).toStrictEqual(1.7976931348623157e+308);
    expect(toFinite('3.2')).toStrictEqual(3.2);
  });
});
