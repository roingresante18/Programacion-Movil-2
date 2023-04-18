const fs = require('fs');
const path = require('path');
const product = require('../models/productModel');
const productsFilePath = path.join(__dirname, '../data/ProductsDataBase.json');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const bodyParser = require('body-parser');

const getProducts = () =>{
    const products = fs.readFileSync(productsFilePath, 'utf8');
    const productsJson = JSON.parse(products);
    return productsJson
}
const getUsers = () => {
    const users = fs.readFileSync(usersFilePath, 'utf-8');
    const usersJson = JSON.parse(users);
    return usersJson;
}
  const usersView = (req, res) => {
    const users = getUsers();
    // console.log(users);
    res.render(path.join(__dirname, '../views/pages/users.ejs'), { users });
}
const userView = (req, res) => {
    const users = getUsers();
    const user = users.find(user => user.id == req.params.id);
    res.render(path.join(__dirname, '../views/pages/user.ejs'), { user });
}
const productsView = (req, res) => {
    const products = getProducts();
    res.render(path.join(__dirname, '../views/pages/products.ejs'), { products});
}
const DetailProduct= (req, res) => {
    const products = getProducts();
    const product = products.find(product => product.id== req.params.id);
    res.render(path.join(__dirname, '../views/pages/product.ejs'), { product }); 
}
const registerView = (req, res) => {
    res.render(path.join(__dirname, '../views/users/register.ejs'));
}
const home = (req, res) =>{ 
    res.render(path.join(__dirname, '../views/pages/home.ejs'))
};  
const cart = (req, res) =>{
    res.render(path.join(__dirname, '../views/pages/cart.ejs'))
}; 
const login = (req, res) =>{
    res.render(path.join(__dirname, '../views/pages/login.ejs'))
}; 
const register = (req, res) =>{
    const users = getUsers();
    const ids = users.map(user => user.id);
    const maxId = Math.max(...ids);
    const id = maxId + 1;
  const newUser = {
    id: id,
    nombre: req.body.nombre,
    apellido: req.body.apellido, 
    email: req.body.email
  }
  users.push(newUser);
  usersText = JSON.stringify({users:users}, null, 2);
  fs.writeFileSync(path.join(__dirname, '../data/usersDataBase.json'), usersText, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    } 
  });
  res.render(path.join(__dirname, '../views/pages/register.ejs'))
}; 


const deleteUser = (req, res) => {
    const users = getUsers();
    newUsers = users.filter(user => user.id != req.params.id)
    usersText = JSON.stringify(newUsers);
    fs.writeFileSync(path.join(__dirname, '../data/usersDataBase.json'), usersText, 'utf8', function (err) {
    });
    res.render(path.join(__dirname, '../views/pages/users.ejs'), { users })
  }

  module.exports = { 
    home,
    cart,
    DetailProduct,
    login,
    register,
    productsView,
    registerView,
    getUsers,
    deleteUser,
    usersView,
    userView
 }
 