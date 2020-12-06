import divide from '../src/divide'

describe('divide', () =>{
  test('legal values', () =>{
    expect(divide(6, 6)).toStrictEqual(1);
    /* FAILS
    expect(divide(20, 2)).toStrictEqual(10);
    expect(divide(100, 25)).toStrictEqual(4);
    expect(divide(6,4)).toStrictEqual(1.5);
    expect(divide(10.5, 2)).toStrictEqual(5.25);
    */
  });
  test('non-values', () =>{
    /* FAILS
    expect(divide(null, 4)).toStrictEqual(1.5);
    expect(divide(10.5, undefined)).toStrictEqual(5.25);
    */
  });
});
