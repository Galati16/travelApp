require("regenerator-runtime/runtime");
const request = require('supertest')
const app = require('../src/server/index.js')

describe('Post Endpoints', () => {
    it('should create a new post', async() => {
        return request(app)
            .post('/store')
            .send({
                title: 'test is cool',
            })
    })
})


/* describe('Post Endpoints', () => {
    it('should recieve and return a request ', async () => {
        const res = await request(app)
            .post('/trip/weather')
            .send({
                url: 'https://api.darksky.net/forecast/13906ff7d642fd620e83783e917d200f/52.5179,13.3759,1586563200'
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('latitude')
    })
}) */

/* const res = await request(app)
.post('/store')
.send({
    title: 'test is cool',
})
expect(res.statusCode).toEqual(201)
expect(res.body).toHaveProperty('post') */