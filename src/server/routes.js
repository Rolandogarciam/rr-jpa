var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://localhost/rr-jpa');

var Schema = mongoose.Schema;

var UserSchema =new Schema({
  name: String,
  lastname: String
}, {collection: 'user'});


var User = mongoose.model('User', UserSchema);


router.get('/people', getPeople);
router.get('/joder', joder);
router.get('/user',findUser);
router.get('/person/:id', getPerson);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function joder(req, res, next){
    let json = {
        name: "joder",
        lastname: "hola mundo"
    }
    res.status(200).send(JSON.stringify(json));
}

function findUser(req, res, next){
  User.find({}).exec(function(err, result){
    if (err) {
        console.log(err);
    }
    else
    {
      res.status(200).send(JSON.stringify(result));
      console.log(result);
    }
  });
}
function getPeople(req, res, next) {
  res.status(200).send(data.people);
}

function getPerson(req, res, next) {
  var id = +req.params.id;
  var person = data.people.filter(function(p) {
    return p.id === id;
  })[0];

  if (person) {
    res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}
