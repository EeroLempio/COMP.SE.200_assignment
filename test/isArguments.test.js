import isArguments from '../src/isArguments'

describe('isArguments', () =>{
  test('is value an arguments object', () =>{
    expect(isArguments(function() { return arguments }())).toStrictEqual(true);
    expect(isArguments([1, 2, 3])).toStrictEqual(false);
  });
});
