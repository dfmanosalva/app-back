var express = require("express");
var router = express.Router();
const Mongolib = require("../db/Mongolib");

/* GET home page. */
router.get("/", function (req, res, next) {
    Mongolib.getDatabase((db) => {
        Mongolib.findDocuments(db, (docs) => {
            res.send(docs);
        });
    });
});

// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('CreateOffer', { title: 'Add an Offer' });
//   });

/* POST */
router.post("/", function (req, res, next) {
    Mongolib.getDatabase((db) => {
        Mongolib.postDocuments(req.body, db, (docs) => {
            res.send(docs);
        });
    });
});

module.exports = router;
