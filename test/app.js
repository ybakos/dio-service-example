let request = require('supertest');

describe("Server", function() {

  var app;

  beforeEach(function() {
    app = require('../app');
  });

  afterEach(function() {
    app.close();
  })

  describe("GET /", function() {
    it("Responds with an empty body", function(done) {
      request(app)
        .get('/')
        .expect(200, '', done);
    });
  });

  it("Responds to /readings", function(done) {
    request(app)
      .get('/readings')
      .expect(200, done);
  });

});
