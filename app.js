const express = require('express');
const path = require('path');
require('dotenv').config();

const todos_route = require('./routes/todos');

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json()); // middleware to parse JSON request bodies
app.use(express.static(path.join(__dirname, "public"))); // middle ware to serve static files form the public dir
app.use(express.urlencoded({ extended: true })) // for form submissions

app.use('/todos', todos_route);


app.get('/', (req, res) => {
    res.render('index');
});

const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})