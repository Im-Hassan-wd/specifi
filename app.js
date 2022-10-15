const express = require('express');
const os = require('os');

console.log(os);
console.log(os.cpus()[1].model);

// express app
const app = express();

// view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000, () => console.log('running on port 3000'));
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: 'Home', os: os });
});

app.get('/home', (req, res) => {
    res.redirect('/');
});

// 404 page 
// app.use((req, res) => {
//     res.status(404).render();
// });