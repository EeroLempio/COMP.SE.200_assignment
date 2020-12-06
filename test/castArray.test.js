import castArray from "../src/castArray"

describe('castArray', () =>{
  test('casting input in to array', () =>{
    expect(castArray(1)).toEqual([1]);
    expect(castArray({ 'a' : 1})).toEqual([{ 'a' : 1}]);
    expect(castArray('abc')).toEqual(['abc']);
    expect(castArray(null)).toEqual([null]);
    expect(castArray(undefined)).toEqual([undefined]);
    expect(castArray([1, 2, 3])).toEqual([1, 2, 3]);
    //expect(castArray()).toStrictEqual([]);
  });
});
