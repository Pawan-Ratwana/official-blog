const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Jai Shree Ram")
})

app.listen(port, (err) => {
    if (err) {
        console.log(`Error in app listen  ${err}`);
    } else {
        console.log(`Server is running on http://localhost:${port}`)
    }
})