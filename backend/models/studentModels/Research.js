const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResearchSchema = new Schema({
  name: {
    String,
    require: true,
  },
  topic: {
    String,
    require: true,
  },
  groupID: {
    String,
    require: true,
  },
  faculty: {
    String,
    require: true,
  },
  document: {
    data: buffer,
    contentType: String,
  },
});

const Research = mongoose.model("Research", ResearchSchema);
module.exports = Research;
