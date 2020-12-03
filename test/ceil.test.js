import ceil from '../src/ceil'

describe('ceil', () =>{
  test('integers', () =>{
    expect(ceil(1)).toBe(1);
    expect(ceil(-1)).toBe(-1);
  });
  test('decimals', () =>{
    expect(ceil(0.1)).toBe(1);
    expect(ceil(-1.1)).toBe(-1);
    expect(ceil(-1.10)).toBe(-1);
    expect(ceil(1.10)).toBe(2);
    expect(ceil(1.00000001)).toBe(2);
  });
  test('precision param', () =>{
    expect(ceil(1,0)).toBe(1);
    expect(ceil(-1.1, 1)).toBe(-1.1);
    expect(ceil(1.01, -1)).toBe(10);
    expect(ceil(111111.10, -5)).toBe(200000);
    expect(ceil(1.00000001,0)).toBe(2);
  });
});
