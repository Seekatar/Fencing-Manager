const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// https://mongoosejs.com/docs/guide.html
// https://mongoosejs.com/docs/schematypes.html has types, attributes
// https://mongoosejs.com/docs/populate.html has Populate doc

const fencerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: { unique: true }
    },
    epeeRating: {
        type: String,
        required: false,
        minLength: 3,
        maxLength: 3,
    },
    foilRating: {
        type: String,
        required: false,
        minLength: 3,
        maxLength: 3,
    },
    saberRating: {
        type: String,
        required: false,
        minLength: 3,
        maxLength: 3,
    },
    bouts: [{
        type: Schema.Types.ObjectId,
        ref: 'Bouts'
    }]
});

const boutSchema = new mongoose.Schema({
    leftFencer: {
        type: Schema.Types.ObjectId,
        ref: 'Fencers'
    },
    rightFencer: {
        type: Schema.Types.ObjectId,
        ref: 'Fencers'
    }
});

function indexError (error) {
    if (error) {
        console.log("Index error");
        console.log(error);
    }
}

const fencerModel = mongoose.model('Fencers', fencerSchema);
const boutModel = mongoose.model('Bouts', boutSchema);

fencerModel.on('index', indexError);
boutModel.on('index', indexError);
