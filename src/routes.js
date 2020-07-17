const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.list);
routes.get('/product/:id', ProductController.get);
routes.post('/product', ProductController.create);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.remove);

module.exports = routes;