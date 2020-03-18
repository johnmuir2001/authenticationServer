const mongoose = require("mongoose")
const validator = require("validator")

const connection = async () => {
    const uri = "mongodb+srv://john-muir:Easistand1907@practice-cluster-zmje3.mongodb.net/test?retryWrites=true&w=majority"
    
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
        console.log("connection made");

      } catch (error) {
        console.log(error);
      }
    };
    
    connection();

module.exports = {
    validator,
    mongoose
}