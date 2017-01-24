var mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
var Schema =  mongoose.Schema;

var MenuSchema = new Schema({
  name: String,
  href: String,
  icon: String
}, {collection: 'menus'});

module.exports = mongoose.model('Menu', MenuSchema);