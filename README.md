# DiO Service

DiO is an aquaponics management system built for [Volcano Veggies](http://www.volcanoveggies.com). This repo houses a web service for storing and retrieving sensor readings.

Environment variables:

* `NODE_ENV`
* `PORT`
* `DATABASE_URL`

Database stuff:
Using knex. Relies on dotenv in development and test.

```
NODE_ENV=development node_modules/.bin/knex migrate:latest
NODE_ENV=test node_modules/.bin/knex migrate:latest
```


## Dependencies

### Production

* [express](https://expressjs.com) to expose a simple HTTP API
* [body-parser](https://github.com/expressjs/body-parser) middleware to parse request bodies

### Development & Test

* [dotenv](https://www.npmjs.com/package/dotenv) for environment config
* [mocha](https://mochajs.org), [chai](http://chaijs.com/), and [supertest](https://www.npmjs.com/package/supertest) for testing

(c) 2017 Yong Joseph Bakos. All rights reserved.
