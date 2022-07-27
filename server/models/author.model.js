const mongoose = require("mongoose");

//Create Schema 
//Time stamps are object in schema
const AuthorSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Must be 3 characters']
    }
},
{ timestamps: true}
);

//Define model
const Author = mongoose.model("Author", AuthorSchema);

//Export model
module.exports = Author;