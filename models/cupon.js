var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CuponSchema = new Schema({
  codigo: String,
  fecha: String,
  consumido: String
});

var Cupon = mongoose.model("Cupon", CuponSchema);
module.exports = Cupon;