// @ts-check
const http = require('http')
const mongoose = require('mongoose');
const fencers = mongoose.model('Fencers');

const fencerById = function (req, res) {
    if (!req.params || !req.params.id) {
        res
            .status(404)
            .json({ message: "id not supplied" });
    }
    else {
        fencers
            .findById(req.params.id)
            .exec((err, inst) => {
                if (err) {
                    res
                        .status(404)
                        .json(err)
                }
                else if (inst) {
                    res
                        .status(200)
                        .json(inst)
                }
                else {
                    res
                        .status(404)
                        .json({ message: "id not found" });
                }
            });
    }
}

const fencersGet = function (req, res) {
    if ( req.query.full) {
        fencers
            .find()
            // todo .populate() other related data if pass in full
            .exec((err, inst) => {
                console.log("Ok for FULL!");
                res
                    .status(200)
                    .json(inst)
            });
    } else {
        fencers
            .find()
            .exec((err, inst) => {
                console.log("Ok!");
                res
                    .status(200)
                    .json(inst)
            });
    }
}

const fencerCreate = function (req, res) {
    fencers.create({
        name: req.body.name,
        epeeRating: req.body.epeeRating,
        foilRating: req.body.foilRating,
        saberRating: req.body.saberRating
    }, (err, fencer) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(fencer);
        }
    });
}

const fencerSet = function (req, res) {
    const id = req.params.id;
    const color = req.body.color;
    console.log(`>>> fencerSet ${id} ${color}`);

    const postData = `{
        "channels":  [
                         {
                             "value":  ${color},
                             "circuit":  ${id}
                         }
                     ]
    }`

    const options = {
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    console.log(">>> before request")

    console.log(postData)

    const req2 = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
    });

    console.log(">>> after request1")

    req2.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    console.log(">>> after request2")

    // write data to request body
    req2.write(postData);
    req2.end();

    console.log("req2 end")

    res
        .status(200)
        .json({ "id": "yahoo" })

    console.log("something else")
}

const fencerDelete = function (req, res) {
    const id = req.params.id;
    if (id) {
        fencers
            .findByIdAndRemove(id)
            .exec((err, fencer) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(204)
                    .json(null);
            }
            );
    } else {
        res
            .status(404)
            .json({
                "message": `No id found for ${id}`
            });
    }
};

module.exports = {
    fencerById,
    fencersGet,
    fencerCreate,
    fencerSet,
    fencerDelete
};