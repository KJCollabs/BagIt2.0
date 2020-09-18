let { customTest } = require("./../utils");

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    expect(customTest()).toEqual(true);
  });
});
