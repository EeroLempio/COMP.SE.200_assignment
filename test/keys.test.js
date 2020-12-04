import keys from '../src/keys'

describe('keys', () =>{
  test('', () =>{
    function Foo() {
      this.a = 1
      this.b = 2
    };
    Foo.prototype.c = 3
    expect(keys(new Foo)).toStrictEqual(['a', 'b']); 
    expect(keys('hi')).toStrictEqual(['0', '1']); 
  });
});
