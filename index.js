/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const apiPort = process.env.PORT || 5001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());



if (process.env.NODE_ENV === 'production') {
    console.log("env ====> ", process.env.NODE_ENV)

    app.use(express.static('client-side/build') , (req, res, next) => {
        next();
      });

    app.get('/', (req, res) => {

        console.log("dir ===>", path.resolve(__dirname, "client-side" , "build" , "index.html"))
        res.sendFile(path.resolve(__dirname, "client-side" , "build" , "index.html"))
    });
}

app.listen(apiPort, () => {
    console.log(` Server running on port ${apiPort}`);
});