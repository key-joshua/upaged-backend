import chaihttp from 'chai-http';
import chai, { expect } from 'chai';
import { OK } from 'http-status';

import app from '../src/index';

chai.use(chaihttp);
const router = () => chai.request(app);

describe('TEST SELECT JOB/S APIs', async () => {
  it('User should be able to select all jobs', (done) => {
    router()
      .get('/api/jobs/select-jobs')
      .end((error, response) => {
        expect(response).to.have.status(OK);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });
});
