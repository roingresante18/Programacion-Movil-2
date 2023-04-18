const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const routes = require('./routes/indexRoutes');
const bodyParser = require('body-parser');



app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(port, () =>{console.log(`Example app listening on port ${port}!`)})




