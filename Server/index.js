require('dotenv').config()
const express = require('express')
const path = require('path');
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// Actions
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();

})
app.use('/', express.static('./client/dist'));

app.use(express.json());

// Catch all
app.get('*', (req, res) => {
	res.sendFile('index.html', { root: './client/dist' });
})

// Error handling
app
    .use((err, req, res, next) => {
        console.error(err);
        const msg = {
            status: err.code || 500,
            error: err.message || 'Internal Server Error',
            isSuccess: false
        }
        res.status(msg.status).json(msg)
    })


console.log('1: About to start server')

app.listen(port, () => {
  console.log(`2: Server running at http://${hostname}:${port}/`)
});

console.log('3: Asked server to start')