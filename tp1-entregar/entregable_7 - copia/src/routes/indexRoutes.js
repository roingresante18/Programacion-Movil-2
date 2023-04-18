const {name} = require('ejs')
const path = require('path');
const userController = require('../controllers/UsersController')


module.exports = function (app) {
    app.get('/', userController.home);
    app.get('/cart', userController.cart);
    app.get('/login', userController.login);
    app.get('/register', userController.register);
    app.get('/products', userController.productsView);
    app.get('/product/:nombre', userController.DetailProduct);
    
    app.get('/users', userController.usersView)
    app.get('/user/:id', userController.userView)
    app.get('/registerView', userController.registerView);
    app.post('/register', userController.register)
    app.post('/delete-user/:id', userController.deleteUser)
}