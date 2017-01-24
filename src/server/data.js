var Person = require('./person/person.model');

function getPeople() {
    var data = {};
    Person.find({}).exec(function (err, result) {
        if (err) {
            console.log('occurring error during find menu');
        } else {
            console.log(result);
            data = JSON.stringify(result);
        }
    });
    return data;
}

module.exports = {
    people: getPeople()
};