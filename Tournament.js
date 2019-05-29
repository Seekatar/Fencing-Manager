/**
* Tournament class
* Jimmy Wallace 5/12/19
* holds the name and events of the tournament
*/

class Tournament {

    /**
    * @param name the name of the tournament
    * @param events an array of the events the tournament will have
    */
    constructor(name){
        this.name = name;
        this.events = [];
        this.numEvents = this.events.lenght;
    }

    addEvent(name, weapon, fencers, sanctioned){
        this.events.push(name, weapon, fencers, sanctioned)
    }

    getName(){return this.name;}

    getEvents(){return this.events;}
}
module.exports = Tournament;
