// Create web server
// 1. Require express
// 2. Create an instance of express
// 3. Define a route to handle incoming requests
// 4. Define a port to listen to
// 5. Start the server

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});