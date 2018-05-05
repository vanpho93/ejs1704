const express = require('express');
const reload = require('reload');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.listen(3000, () => console.log('Server started!'));
reload(app);
