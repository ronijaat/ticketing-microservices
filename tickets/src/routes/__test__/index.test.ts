import request from 'supertest';

import { app } from '../../app';

it('it can fetch a list of tickets', async () => {
  // Create 3 tickets
  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({ title: 'ticket1', price: 10 })
    .expect(201);
  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({ title: 'ticket2', price: 20 })
    .expect(201);
  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({ title: 'ticket3', price: 30 })
    .expect(201);

  // Fetch the list of tickets
  const response = await request(app).get('/api/tickets').send().expect(200);

  // Check if the tickets are fetched
  expect(response.body.length).toEqual(3);
});
