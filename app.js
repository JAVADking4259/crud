const express = require('express');
const app = express();
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const { sequelize } = require("./db/db");
const { User } = require('./db/models/index');
const user = require('./routes/routes');
const path = require('path');
app.use(express.json({ limit: '50mb' }));



//routes
app.use(user);

//db connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

//User.create({ firstName: 'javad', lastName: 'king' })
//    .then(user => {
//        console.log('New user created:', user.toJSON());
//    })
//    .catch((err) => {
//        console.error('Unable to create new user:', err);
//    });
//app running
app.listen(3000, () => {
    console.log("server running");
});