var mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
var Schema =  mongoose.Schema;

var PersonSchema = new Schema({
    "personId" : Number,
	"firstName" : String,
	"lastName" : String,
	"age" : Number,
	"location" : String
}, {collection: 'persons'});

module.exports = mongoose.model('Person', PersonSchema);