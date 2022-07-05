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

  after(async () => {
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

  it('Status code: 400', async () => {
    sinon.restore();

    sinon
      .stub(tasksModel, "findAll")
      .resolves([]);

    response = await chai
      .request(app)
      .get('/tasks');

    expect(response.status).exist;
    expect(response).to.have.status(400);
  });
});

describe('2 - POST /tasks', () => {
  before(async () => {
    sinon
      .stub(tasksModel, "findAll")
      .resolves([...mockTasks, {
        id: 5,
        description: "Nova tarefa",
        priority: 2,
        status: false,
        date: "2022-07-03T04:20:20.000Z",
      }] as unknown as tasksModel[]);

    sinon
      .stub(tasksModel, "create")
      .resolves();

    response = await chai
      .request(app)
      .post('/tasks')
      .send({
        task: {
          description: "Nova tarefa",
          date: "2022-07-03T04:20:20.000Z",
          priority: 2
        }
      })
  });

  after(async () => {
    sinon.restore();
  })

  it('Status code: 201', async () => {
    expect(response.status).exist;
    expect(response).to.have.status(201);
  });

  it('Response body com nova tarefa adicionada', async () => {
    expect(response.body.tasks).to.be.an('array');
    expect(response.body.tasks).to.have.length(5);
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
    expect(response.body.tasks[4].id).to.be.equal(5);
    expect(response.body.tasks[4].description).to.be.equal('Nova tarefa');
    expect(response.body.tasks[4].priority).to.be.equal(2);
    expect(response.body.tasks[4].status).to.be.equal(false);
    expect(response.body.tasks[4].date).to.be.an('string');
  });
});