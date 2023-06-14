const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user_email:  {type: String, required: true, maxlength: 40},
  comment:  {type: String, required: true, maxlength: 240},
  dt: {type: String, required: true, default: Date.now},
});

function introducción(unidad_didáctica) {
  var hola = unidad_didáctica
} 

// holaimage.png

module.exports = mongoose.model("Comment", CommentSchema);