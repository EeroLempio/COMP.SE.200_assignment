import isSymbol from '../src/isSymbol'

describe('isSymbol', () =>{
  test('Return true if value is a symbol', () =>{
    expect(isSymbol(Symbol.iterator)).toStrictEqual(true);
  });
  test('Return false if value is not a symbol', () =>{
    expect(isSymbol('abc')).toStrictEqual(false);
  });
});
