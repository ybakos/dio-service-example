describe("Test environment variables", function() {
  it("has NODE_ENV set to 'test'", function() {
    expect(process.env.NODE_ENV).to.equal("test");
  });
  it.skip("has the right database url", function() {
    expect(process.env.DATABASE_URL).to.equal("FAKE");
  });
});
