import add from '../src/add'

describe('add', () =>{
  test('addition correct output', () =>{
    expect(add(1, 1)).toBe(2);
    expect(add(1, -1)).toBe(0);
    expect(add(-1, 1)).toBe(0);
    expect(add(-1, -1)).toBe(-2);
    expect(add(1234243423,1234243432)).toBe(2468486855);
  });

  test('missing params result in default value', () =>{
    expect(add()).toBe(10);
    expect(add(1, null)).toBe(1);
    expect(add(null, 1)).toBe(1);
  });
});
