const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeWork = new Schema({
    name: {
        type: String
    },
    desc: {
        type: String
    },
    file: {
        type: String
    },
    module: {
        type: Schema.Types.ObjectId,
        ref: 'Module'
    }
})

module.exports = mongoose.model('HomeWork', homeWork)