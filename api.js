const request = require('request');
const express = require('express')
var router = express.Router();

const KEYWORD_ENDPOINT = "http://api.cortical.io:80/rest/text/keywords?retina_name=en_synonymous";

router.get('/test', function(req, res, next) {
    
    request(KEYWORD_ENDPOINT, {body: "hello world", json: true}, (err, res, body) => {
      if (err) { return console.log(err); }
      console.log(body);
    });
    
});

module.exports = router;