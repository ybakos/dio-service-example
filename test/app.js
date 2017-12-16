const request = require('supertest');

describe("Server", function() {

  var app;
  const postData = {
    sensorId: 'FAKE_SENSOR_ID',
    attribute: 'FAKE_ATTRIBUTE',
    value: 'FAKE_VALUE'
  };

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
    it("Displays a reading that was posted", function(done) {
      const agent = request(app);
      agent.post('/readings')
        .type('json')
        .accept('json')
        .send(postData)
        .end(function() {
          agent.get('/readings)')
            .accept('json')
            .expect(200)
            .end(function(err, res) {
              // TODO
              done();
            });
        });
    });
  });

  describe("POST /readings", function() {
    it("Responds with 200 OK", function(done) {
      request(app)
        .post('/readings')
        .expect(200, done);
    });
    it("Responds with the body of the POST data", function(done) {
      request(app)
        .post('/readings')
        .type('json')
        .accept('json')
        .send(postData)
        .expect(200, postData, done);
    });
  });

});
