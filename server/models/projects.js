const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({

    name: {
        type: String,
        required: [true, 'name is required']
    },

    description: {
        type: String,
        required: [true, 'description is required']
    },

    linkgit: {
        type: String,
        required: [true, 'link is required']
    },

    linkgitfront: {
        type: String,
        required: [true, 'link is required']
    },

    linkheroku: {
        type: String,
        required: false
    },

    linkherokufront: {
        type: String,
        required: false
    },

    web: {
        type: String,
        required: [true, 'web is required']
    }

});

module.exports = mongoose.model('Projects', usuarioSchema);