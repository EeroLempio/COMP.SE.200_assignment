import reduce from '../src/reduce'

describe('reduce', () =>{
  test('reduce collection to a value with a function', () =>{
   expect(reduce([1, 2], (sum, n) => sum + n, 0)).toStrictEqual(3);
    expect(
      reduce({ 'a': 1, 'b': 2, 'c': 1 }, 
        (result, value, key) => {
          (result[value] || (result[value] = [])).push(key)
          return result
        }, {})
    ).toStrictEqual({ '1': ['a', 'c'], '2': ['b'] });
  });
});
