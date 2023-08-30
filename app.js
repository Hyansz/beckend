const express = require('express');

const app = express();

// contoh simple sederhana
/**
 *  req adalah singaktan dari request yang isinya dikirim oleh client.
 * res adalah singaktan dari response yang isinya kita kirim ke client
 * contoh seperti data, json, html, dan codeHTTP (default:200)
 */

app.get('/', (req, res) => {
    
})

// Cara Running
app.listen(3000, () => {
    console.log('Hai Bro, Your Server Have Running in http://localhost:3000');
})

// Jalannya dengan menulis node app.js di terminal
// Mematikan server dengan `ctrl+c`