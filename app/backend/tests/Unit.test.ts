import 'mocha';
import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import Tasks from '../src/database/models';
import { app } from '../src/app';
import { Response } from 'superagent';

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

// describe('1 - POST /login - Correct email and password', () => {
//   before(async () => {
//     sinon
//       .stub(Users, "findOne")
//       .resolves({...UserMock} as unknown as Users);

//     response = await chai
//       .request(app)
//       .post('/login')
//       .send({
//         email: 'batman@justiceleague.org',
//         password: 'secret_admin'
//       });
//   });

//   after(async ()=>{
//     sinon.restore();
//   })

//   it('Check status 200', async () => {
//     expect(response.status).exist;
//     expect(response).to.have.status(200);
//   });

//   it('Check response body <id>', async () => {
//     expect(response.body.user.id).exist;
//     expect(response.body.user.id).to.be.equal(1);
//   });

//   it('Check response body <username>', async () => {
//     expect(response.body.user.username).exist;
//     expect(response.body.user.username).to.be.equal('batman');
//   });

//   it('Check response body <role>', async () => {
//     expect(response.body.user.role).exist;
//     expect(response.body.user.role).to.be.equal('admin');
//   });

//   it('Check response body <email>', async () => {
//     expect(response.body.user.email).exist;
//     expect(response.body.user.email).to.be.equal('batman@justiceleague.org');
//   });
// });
