## Test otomatis menggunakan supertest
instal = npm i -D supertest
import supertest = const request = require('supertest');
import aplikasi express = const app = require('./app');
panggil path root = const response = await require(app).get('/');
test status = expect(response.status).toBe(200);
test body = expect(response.body).toEqual({message:'Hello World'});

Contoh post
const data = {message: "Test"};
const response = await response(app)
 .post('/api/post')
 .send(data)

afterAll( () => {
    app.close()  <!-- Menutup server setelah semua test selesai -->
} );

NB: 
- Tidak perlu menjalankan server secara manual
- Pada app.js, untuk app.listen harus di export agar tidak error

const server = app.listen()
module.exports = server;