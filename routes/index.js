var express = require('express');
var router = express.Router();
var request = require('request');


var api_url =  process.env.API_HOST + '/api/status';
console.log(api_url);



/* GET home page. */
router.get('/', function(req, res, next) {
  request(
    {
      method: 'GET',
      url: api_url,
      json: true
    },
    function (error, response, body) {
      console.log(error)
      console.log("I am inside web entry page")
      console.log(response)
      if (error || response.statusCode !== 200) {
        return res.status(500).send('error running request to ' + api_url);
      } else {
        res.render('index', {
          title: 'Welcome to Employee Details of NAGARRO Company' ,
          request_uuid: body.request_uuid,
          //time: body.time
          id: body.id,
          name: body.name,
          age: body.age,
          address: body.address,
          salary: body.salary
        });
      }
    }
  );
});

module.exports = router;
