const request = require('supertest');
const app = require('../src/app');
const sportingGoods = require('../src/data');

// before every test that runs, empty out the sportingGoods array
beforeEach(() => {
  sportingGoods.splice(0, sportingGoods.length);
})

describe('/goods GET', () => {
  test('responds with an empty array when the sportingGoods array is empty', async () => {
    // set up my sportingGoods array with the data that we want for this test
    // no setup required :)
    // make a fake request
    const response = await request(app).get('/goods');
    // assert things about the response to that request
    expect(response.statusCode).toEqual(200);
    expect(response.body.data).toEqual([]);
  });
  test('responds with an array containing a single sporting good', async () => {
    // set up my sportingGoods array with the data that we want for this test
    const expectedData = [
      {
        id: 86,
        name: 'vaulting pole',
        description: 'jump and then fling yourself so high',
        price: 235.00
      }
    ]
    sportingGoods.push(...expectedData);
    // make a fake request
    const response = await request(app).get('/goods');
    // assert things about the response to that request
    expect(response.statusCode).toEqual(200);
    expect(response.body.data).toEqual(expectedData);
  })
})

describe('errors', () => {
  test('404 error', async () => {
    const response = await request(app).get('/asdfasdfasdfasdf');
    expect(response.statusCode).toEqual(404);
  })
})
