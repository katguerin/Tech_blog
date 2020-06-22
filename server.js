const express = require("express");
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controllers/');
const { Console } = require("console");

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// app.use(express.static(path.join(__dirname, 'public')));

// added below during zoom with helper
app.use(routes);
app.listen(PORT, () => console.log(`LISTENING ON PORT: ${PORT}`));