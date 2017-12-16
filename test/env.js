let chai = require('chai');
let expect = chai.expect;

describe("Test environment variables", function() {
  it("has the right database url", function() {
    expect(process.env.DATABASE_URL).to.equal("FAKE");
  });
});
