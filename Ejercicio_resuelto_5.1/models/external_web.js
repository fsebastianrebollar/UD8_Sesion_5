const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExternalWebSchema = new Schema({
  address:  {type: String, required: true, maxlength: 40}
});

module.exports = mongoose.model("ExternalWeb", ExternalWebSchema);