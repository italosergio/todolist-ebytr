import 'mocha';
import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import tasksModel from '../database/models/Tasks';
import { app } from '../app';
import { Response } from 'superagent';

import { mockTasks } from './mock';

chai.use(chaiHttp);

const { expect } = chai;

let response: Response;

describe('0 - Error middleware', async () => {
    before(async () => {
      response = await chai
      .request(app)
      .post('/tasks')
      .send({
        sendNothing: ''
      });
    })

    it('Status code: 500', async () => {
      expect(response).to.have.status(500);
    })

    it('Message: \'Something whrong!\'', async () => {
      expect(response.body.message).to.be.equal('Something wrong!');
    })
})

describe('1 - GET /tasks', () => {
  before(async () => {
    sinon
      .stub(tasksModel, "findAll")
      .resolves([...mockTasks] as unknown as tasksModel[]);

    response = await chai
      .request(app)
      .get('/tasks');
  });

  after(async ()=>{
    sinon.restore();
  })

  it('Status code: 200', async () => {
    expect(response.status).exist;
    expect(response).to.have.status(200);
  });

  it('Response body', async () => {
    expect(response.body.tasks).to.be.an('array');
    expect(response.body.tasks).to.have.length(4);
    expect(response.body.tasks[0].id).to.be.equal(1);
    expect(response.body.tasks[0].description).to.be.equal('Reuniao Ebytr');
    expect(response.body.tasks[0].priority).to.be.equal(3);
    expect(response.body.tasks[0].status).to.be.equal(false);
    expect(response.body.tasks[0].date).to.be.an('string');
    expect(response.body.tasks[1].id).to.be.equal(2);
    expect(response.body.tasks[1].description).to.be.equal('Daily com o time');
    expect(response.body.tasks[1].priority).to.be.equal(2);
    expect(response.body.tasks[1].status).to.be.equal(false);
    expect(response.body.tasks[1].date).to.be.an('string');
    expect(response.body.tasks[2].id).to.be.equal(3);
    expect(response.body.tasks[2].description).to.be.equal('Sair com cachorro');
    expect(response.body.tasks[2].priority).to.be.equal(0);
    expect(response.body.tasks[2].status).to.be.equal(true);
    expect(response.body.tasks[2].date).to.be.an('string');
    expect(response.body.tasks[3].id).to.be.equal(4);
    expect(response.body.tasks[3].description).to.be.equal('Beber Agua');
    expect(response.body.tasks[3].priority).to.be.equal(1);
    expect(response.body.tasks[3].status).to.be.equal(false);
    expect(response.body.tasks[3].date).to.be.an('string');
  });
});
