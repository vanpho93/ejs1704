const express = require('express');
const reload = require('reload');

const words = [
    { id: 'a1', en: 'One', vn: 'Mot', isMemorized: false },
    { id: 'a2', en: 'Two', vn: 'Hai', isMemorized: true },
    { id: 'a3', en: 'Three', vn: 'Ba', isMemorized: true },
    { id: 'a4', en: 'Four', vn: 'Bon', isMemorized: false },
]

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.get('/syntax', (req, res) => res.render('syntax', { soA: 10 }));

app.get('/words', (req, res) => res.render('words', { words }));

app.listen(3000, () => console.log('Server started!'));
reload(app);
