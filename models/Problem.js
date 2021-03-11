const { model, Schema } = require("mongoose");

const problemSchema = {
  body: [
    {
      question: String,
      answer: Number,
      numSolved: Number,
      numAttempted: Number,
    }
  ],
  problemType: String,
  topic: String,
  createdAt: String,
};


module.exports = model("Probem" , problemSchema)