import capitalize from "../src/capitalize"

describe('capitalize', () =>{
  test('First to capital rest to lower', () =>{
      expect(capitalize("fOObAR")).toBe("Foobar");
      expect(capitalize("-fOObAR")).toBe("-foobar");
  });
});
