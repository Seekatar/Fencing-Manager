/**
* Event class
* Jimmy Wallace 5/12/19
* represents an event, creates pools
*/
const Pool = require('./Pool.js');

class Event {

    /**
    * @param name the name of the event
    * @param weapon the weappon of the event (epee, foil, sabre)
    * @param fencers an array of fencers in the event
    * @param sanctioned whether or not the event is a USFA sanctioned events
    *                   defaults to false
    */
    constructor(name, weapon, fencers, sanctioned=false){
        this.name = name;
        this.weapon = weapon;
        this.fencers = fencers;
        this.numFencers = this.fencers.length;
        this.pools = [];
        this.numPools = this.calculateNumPools();
        this.sanctioned = sanctioned;
    }

    /**
    * @return the number of pools needed for this event
    * calculates the number of pools based on how many fencers there are
    */
    calculateNumPools(){
        if (this.numFencers % 7 === 0) {return this.numFencers / 7;}
        if (this.numFencers <= 8) {return 1;}

        return Math.Floor(this.numFencers / 7) + 1;
    }

    /**
    * creates the correct amount of pools with the correct amount of fencers in
    * each
    * 5/30/19 right now only works properly if numPools == 1
    */
    createPools(){
        this.calculateNumPools();


        if (this.numFencers <= 9) {
            var tempFencers = this.fencers;
        }

        this.pools.push(new Pool(tempFencers, this.weapon));
        for (var i = 0; i < this.pools.length; i++){
            this.pools[i].addBouts(this.numFencers);
        }
    }

    getName(){return this.name;}
    getWeapon(){return this.weapon;}
    getFencers(){return this.fencers;}
    getPools(){return this.pools;}
}
module.exports = Event;
