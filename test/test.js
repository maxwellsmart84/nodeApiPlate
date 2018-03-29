process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/serve');

const should = chai.should();

chai.use(chaiHttp);

describe('/ GET', () => {
  it('it should return a 200', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('string');
        res.body.should.be('A-OK');
        done();
      });
  });
});
