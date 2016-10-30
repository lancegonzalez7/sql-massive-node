var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})

var massive = require('massive');
var connectionString = "postgres://postgres:Sniper77**@localhost/Sandbox";
var massiveInstance = massive.connectSync({connectionString: connectionString})
app.set('db',massiveInstance);
var db = app.get('db');


var controller = require('./server/productsCtrl.js')

// controller.Create(['test2','test2-desc',9,'test-image2.png']);
// controller.GetAll();
// controller.GetOne([1]);
// controller.Update([2,'new-test-desc2']);
// controller.Delete([3]);

app.get('/api/products', controller.GetAll);
app.get('/api/product/:productId', controller.GetOne);
app.post('/api/product', controller.Create);
app.put('/api/product/:productId', controller.Update);
app.delete('/api/product/:productId', controller.Delete);

// controller.Update();
