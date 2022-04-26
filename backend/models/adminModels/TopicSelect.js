const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');
const Schema = mongoose.Schema;
const TopicSchema = new Schema({
    studentId : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    groupId : {
        type : String,
        required : true
    },

    faculty : {
        type : String,
        required : true
    },

    department : {
        type : String,
        required : true
    },

    researchField : {
        type : String,
        required : true
    },
    
    topic : {
        type : String,
        required : true
    }

})

const topicSelect = mongoose.model("TopicSelect", TopicSchema);
module.exports = topicSelect;