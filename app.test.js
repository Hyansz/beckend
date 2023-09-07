const request= require('supertest')
const app = require('./app')

describe('Test in app', () => {
    test('When get root should succes', async () => {
        let response = await request(app).get('/');
        expect(response.status).toBe(200); //=== / '5' === '5' => false
        expect(response.body).toEqual({data: []}); //=== / '5' == '5' => true
    }, 5000);

    test('When post root should succes', async () => {
        const data = {name:'Bambang', age:16}
        let response = await request(app).post('/').send(data);
        expect(response.status).toBe(200); 
        expect(response.body.data[0].name).toEqual('Bambang');
        expect(response.body.data[0].age).toEqual(16);
        expect(typeof response.body.data[0].id).toBe('number');
    }, 5000);

    afterAll(() => {
        app.close();
    });
});