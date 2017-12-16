describe("Test environment variables", function() {
  it.skip("has the right database url", function() {
    expect(process.env.DATABASE_URL).to.equal("FAKE");
  });
});
