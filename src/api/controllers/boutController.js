// @ts-check
const http = require('http')
const mongoose = require('mongoose');
const bouts = mongoose.model('Bouts');

const boutsGet = function (req, res) {
    bouts
        .find()
        .populate('leftFencer')
        .populate('rightFencer')
        .exec((err, inst) => {
            console.log("Ok!");
            res
                .status(200)
                .json(inst)
        });
}

const boutCreate = function (req, res) {
    bouts.create({
        leftFencer: req.body.leftFencer,
        rightFencer: req.body.rightFencer,
    }, (err, bout) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(bout);
        }
    });
}


module.exports = {
    boutsGet,
    boutCreate
};