const express = require('express');
const app = express();
const routes = require('./app/routes');

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('Server running on port 3000'));