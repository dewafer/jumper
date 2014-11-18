var express = require('express');
var router = express.Router();
var querystring = require('querystring');

/* GET users listing. */
router.get('/:redirect?', function(req, res) {

	var redirect_param = req.params.redirect || 'go';

	var go_url = req.query[redirect_param] || '/show_query';
	var query = querystring.stringify(req.query);

	var query_param = '';
	if(query){
		query_param += '?' + query;
	}

	res.redirect(go_url + query_param);
});

module.exports = router;
