const express = require('express');
const app = express();
const port = 5000;

// set the routes 
app.use('/', require('./routes'));

app.get('/', (req, res) => {
    res.send("Jai Shree Ram")
})


// configure view engine and view directory 
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, (err) => {
    if (err) {
        console.log(`Error in app listen  ${err}`);
    } else {
        console.log(`Server is running on http://localhost:${port}`)
    }
})