const express = require('express');
const os = require('os');

const fs = require('fs');
const client = require('https');

// function downloadImage(url, filepath) {
//     return new Promise((resolve, reject) => {
//         client.get(url, (res) => {
//             if (res.statusCode === 200) {
//                 console.log(filepath)
//                 res.pipe(fs.createWriteStream('public' + filepath))
//                     .on('error', reject)
//                     .once('close', () => resolve(filepath));
//             } else {
//                 // Consume response data to free up memory
//                 res.resume();
//                 reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));

//             }
//         });
//     });
// }

// downloadImage('https://www.google.com/images/srpr/logo3w.png', 'public/lena.png')
//     .then(console.log)
//     .catch(console.error);



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