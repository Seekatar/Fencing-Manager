/**
* Tournament class
* Jimmy Wallace 5/12/19
* holds the name ane events of the tournament
*/

class Tournament {

    /**
    * @param name the name of the tournament
    * @param events an array of the events the tournament will have
    */
    constructor(name, events, numFencers){
        this.name = name;
        this.events = events;
        this.numFencers = numFencers;
    }

    getName(){return this.name;}

    getEvents(){return this.events;}
}
module.exports = Tournament;
