const mongoose = require('mongoose');
const mongooseURI = 'mongodb://127.0.0.1:27017/inotebookdb';

function connectToMongo() {
    mongoose.connect(mongooseURI).
        then((data) => { console.log(`connected successfully `) })
        .catch((err) => { console.log(err) })
}

module.exports = connectToMongo