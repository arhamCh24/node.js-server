const mongoose = require("mongoose");
const {Schema} = mongoose;

const ProjectsSchema = new Schema({

    title:{
        type: String,
        required: true
    },
    img:{
        type:String,
        required: true,
    },
    summary:{
        type: String,
        required: true,
    },
    link:{
        type:String,
        required: true,
    },
    github:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
       default: Date.now

    },
});

module.exports = mongoose.model('projects',ProjectsSchema);