var express = require('express');
var router = express.Router();

//var router = require('express').Router();

var homeController = require('../controllers/api/home.controller');
var productController = require('../controllers/api/product.controller');

router.get('/', (req, res) => {
    res.json({
        status: 'API is working', 
        message: 'Welcome to RESTHuh API of System'
    });
});

router.route('/home').get(homeController.home);
router.route('/home/list').get(homeController.listOfProduct);

router.route('/product/getall').get(productController.getAllProduct);

module.exports = router;