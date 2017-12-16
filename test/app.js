const request = require('supertest');

describe("Server", function() {

  var app;
  const fakeReading = {
    sensorId: 'FAKE_SENSOR_ID',
    attribute: 'FAKE_ATTRIBUTE',
    value: 'FAKE_VALUE'
  };

  // Create a new server for each test.
  // https://glebbahmutov.com/blog/how-to-correctly-unit-test-express-server/
  beforeEach(function() {
    delete require.cache[require.resolve('../app')];
    app = require('../app');
  });

  afterEach(function(done) {
    app.close(done);
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
        .send(fakeReading)
        .end(function() {
          agent.get('/readings')
            .accept('json')
            .expect(200)
            .end(function(err, res) {
              expect(res.body).to.be.an('array').that.deep.includes(fakeReading);
              done(err);
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
        .send(fakeReading)
        .expect(200, fakeReading, done);
    });
  });

});
