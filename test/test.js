process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const PORT = process.env.PORT || 8080;

chai.use(chaiHttp);

describe('/ GET', () => {
  it('it should return a 200', (done) => {
    chai
      .request(`http://localhost:${PORT}`)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('server', 'online');
        done();
      });
  });
});
