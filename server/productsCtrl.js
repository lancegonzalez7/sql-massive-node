var app = require('../index');
var db = app.get('db')

module.exports = {
    Create: function(req, res, next) {
        var arr = [
            req.body.name,
            req.body.description,
            req.body.price,
            req.body.imageurl
        ];

        db.create_products(arr, function(err) {
            res.send("Successfully posted to Database")
        })
    },

    GetAll: function(req, res, next) {
        db.read_products(function(err, products) {
            res.send(products);
        })
    },

    GetOne: function(req, res, next) {
        var id = req.params.productId
        db.read_product([id], function(err, products) {
            res.send(products);
        })
    },

    Update: function(req, res, next) {
        var id = req.params.productId;
        var desc = req.query.desc;
        var arr = [id, desc];
        db.update_product(arr, function(err, product) {
            res.send("Successfully Updated product");
        })
    },

    Delete: function(req, res, next) {
        var id = req.params.productId;
        db.delete_product([id], function(err, product) {
            res.send("Successfully deleted product");
        })
    }
}
