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

describe('/goods POST', () => {
  test('creating a new good works', async () => {
    // set up a bunch of data to send to the server
    const newGood = {
      name: 'snorkel',
      description: 'swim',
      price: 7
    };
    // make my request
    const response = await request(app)
      .post('/goods')
      .set('Accept', 'application/json')
      .send({ data: newGood });
    const expectedNewGood = {
      ...newGood,
      id: 7
    }
    // make sure the response contains the same data I sent
    expect(response.body.data).toEqual(expectedNewGood)
    // make sure the data I sent was added to the sportingGoods array
    expect(sportingGoods[sportingGoods.length - 1]).toEqual(expectedNewGood);
  })
  test('creating a new good without a name fails', async () => {
    // set up a bunch of data to send to the server
    const newGood = {
      description: 'swim',
      price: 7
    };
    // make my request
    const response = await request(app)
      .post('/goods')
      .set('Accept', 'application/json')
      .send({ data: newGood });

    // make sure we got the correct error message
    expect(response.statusCode).toEqual(400);
    expect(response.body.error).toEqual(expect.stringContaining('name'))
  })
})

describe('errors', () => {
  test('404 error', async () => {
    const response = await request(app).get('/asdfasdfasdfasdf');
    expect(response.statusCode).toEqual(404);
  })
})
