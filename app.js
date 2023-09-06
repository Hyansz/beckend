const express = require('express');
const { postDataUserHandler } = require('./handlers/post-data-user-handler');
const { putDataUserHandler } = require('./handlers/put-data-user-handler');
const { deleteDataUserHandler } = require('./handlers/delete-data-user-handler');
const { getDataUserHandler } = require('./handlers/get-data-user-handler');

const app = express();

// contoh simple sederhana
/**
 *  req adalah singaktan dari request yang isinya dikirim oleh client.
 * res adalah singaktan dari response yang isinya kita kirim ke client
 * contoh seperti data, json, html, dan codeHTTP (default:200)
 */

app.use(express.json())

app.get('/', getDataUserHandler)

app.post('/', postDataUserHandler);

app.put('/', putDataUserHandler)

app.delete('/', deleteDataUserHandler)

// Cara Running
app.listen(3000, () => {
    console.log('Hai Bro, Your Server Have Running in http://localhost:3000');
})

// Jalannya dengan menulis `node app.js` di terminal
// Mematikan server dengan `ctrl+c`