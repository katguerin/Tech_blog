const express = require("express");
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controllers/');
const { Console } = require("console");

const app = express();
const PORT = process.env.PORT || 3000;

// commented out because i don't have a sequelizeStore to connect it to - that was in module 13 hw that I skipped
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };
// app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

// added below during zoom with helper
app.use(routes);
app.listen(PORT, () => console.log(`LISTENING ON PORT: ${PORT}`));