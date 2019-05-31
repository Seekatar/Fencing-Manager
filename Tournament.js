/**
* Tournament class
* Jimmy Wallace 5/12/19
* holds the name and events of the tournament
*/

const Event = require('./Event.js')

class Tournament {

    /**
    * @param name the name of the tournament
    * @param events an array of the events the tournament will have
    */
    constructor(name){
        this.name = name;
        this.events = [];
        this.numEvents = this.events.length;
    }

    addEvent(name, weapon, fencers, sanctioned){
        var event = new Event(name, weapon, fencers, sanctioned);
        this.events.push(event);
        return event;
    }

    getName(){return this.name;}
    getEvents(){return this.events;}
}
module.exports = Tournament;
