const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

connectDB();

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/test', require('./routers/testRouter'));
app.use('/api/user', require('./routers/userRouter'));

app.listen(port, () => console.log(`Server started on port ${port}`));
