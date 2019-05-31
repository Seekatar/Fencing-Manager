# Fencing Manager API

## Setup
* Install [nodeJs](https://nodejs.org/en/download/)
* Install [mongo](https://docs.mongodb.com/manual/installation/)
* `npm install -g express-generator`
* In the `src` folder `npm install`
* In mongo
    * Create a mongo database `fencing`
    * Create `fencers` collection
    * Create `bouts` collection

## Running
In the src folder `npm start` To start the server on port 3000
See the `routes/api.js` file for full list of valid calls, but some you can run from the browser are

http://localhost:3000/api/fencers
http://localhost:3000/api/bouts


## Useful Links
* [mongo command line](https://docs.mongodb.com/manual/reference/method/)
* [mongoose](https://mongoosejs.com/docs/guide.html) (To search scroll all the way to the bottom on the left)
* [mongoose data types](https://mongoosejs.com/docs/schematype)
* [Populate (join) in mongoose](https://mongoosejs.com/docs/populate.html)