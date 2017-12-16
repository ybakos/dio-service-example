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

  describe("GET /readings", function() {
    it("Responds with 200 OK", function(done) {
      request(app)
        .get('/readings')
        .expect(200, done);
    });
  });

  describe("POST /readings", function() {
    it("Responds with 200 OK", function(done) {
      request(app)
        .post('/readings')
        .expect(200, done);
    });
    it("Responds with the body of the POST data", function(done) {
      let postData = {
        sensorId: 'FAKE_SENSOR_ID',
        attribute: 'FAKE_ATTRIBUTE',
        value: 'FAKE_VALUE'
      };
      request(app)
        .post('/readings')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(postData)
        .expect(200, JSON.stringify(postData), done);
    });
  });

});
