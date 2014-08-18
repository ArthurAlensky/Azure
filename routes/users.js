var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/userlist', function(req, res) {
    var db = req.db;
    db.collection("userlist").find().toArray(function(err, items){
        res.json(items);
    })
});

module.exports = router;
