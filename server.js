var express = require('express');
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var path = require("path");
var port = process.env.PORT || 8080;
var sequelize = require('sequelize');
var dish = require("./models").dish;
var ingredient = require("./models").ingredient;

dish.create({
    name: 'aa'
}).then(dish = > {
    dish.createIngredient({
    name: 'ing'
});
})
;

var app = express(); // create our app w/ express

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//Routes

app.get("/", (req, res) = > {
    dish.findAll({
    include: [ingredient]
}).then(dishes = > {
    res.render('index', {dishes: dishes});
});
})

app.listen(port);
