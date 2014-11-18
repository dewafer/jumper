var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('show_query', { title: 'Query in URL', query: req.query });
});

module.exports = router;
