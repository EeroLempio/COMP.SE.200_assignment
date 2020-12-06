import eq from '../src/eq'

describe('eq', () =>{
  test('comparison', () =>{
    const object = { 'a': 1 };
    const other = { 'a': 1 };
    expect(eq(object, object)).toStrictEqual(true);
    expect(eq(object, other)).toStrictEqual(false);
    expect(eq('a', 'a')).toStrictEqual(true);
    //expect(eq('a', Object('a'))).toStrictEqual(false);
    //expect(eq(NaN, NaN)).totoStrictEqualBe(true);
  });
});
