import isDate from '../src/isDate'

describe('isDate', () =>{
  test('true if value is date object', () =>{
    expect(isDate(new Date)).toStrictEqual(true);
  });
  test('false if value is not a date object', () =>{
    expect(isDate('Mon April 23 2012')).toStrictEqual(false);
  });
});
