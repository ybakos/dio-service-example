let request = require('supertest');

describe("Server", function() {

  var app;

  beforeEach(function() {
    app = require('../app');
  });

  afterEach(function() {
    app.close();
  })

  it("Responds to /", function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });

});
