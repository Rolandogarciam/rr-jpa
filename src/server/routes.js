var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');
var Menu = require('./menu/menu.model')
var Person = require('./person/person.model');

router.get('/people', getPeople);
router.get('/joder', joder);
router.get('/person/:id', getPerson);
router.put('/person/:id', updatePerson);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function joder(req, res, next){
    Menu.find({}).exec(function(err, result){
     if (err){
         res.send('occurring error during find menu');
     }else{
         res.json(result);
     }
    });
}
function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
    console.log(doc);
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function getPeople(req, res, next) {
    Person.find({}).exec(function (err, result) {
        if (err) {
            console.log('occurring error during find menu');
        } else {
            console.log(result);
            res.status(200).json(result);
        }
  });
  console.log('data.people');
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

function updatePerson(req, res, next) {
  var id = +req.params.id;
  var person = data.people.filter(function(p) {
    return p.id === id;
  })[0];

  if (person) {
      person.firstName = req.body.firstName;
      res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}
