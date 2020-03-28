const express = require('express');
const route = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); //Torna o express entendendo como JSON
app.use(route);
// Metodos HTTP GET POST PUT DELETE


app.listen(3333);
