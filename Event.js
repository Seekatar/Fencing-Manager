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

    calculateNumPools(){
        if (this.numFencers % 7 === 0) {return this.numFencers / 7;}
        if (this.numFencers < 8) {return 1;}

        return Math.Floor(this.numFencers / 7) + 1;
    }

    createPools(){
        this.calculateNumPools();
        for (var i = 0; i < this.numPools; i++){
            let size;
            let tempFencers;

            if (this.numFencers <= 7) {
                size = this.numFencers;
                tempFencers = this.fencers;
            }
            else {
                console.log("<!> WARNING <!> Lazy code, fix this later, this should calculte the proper number of fencers if there are, say 20 fencers in the event");
                tempFencers = null;
                size = 7;
            }

            this.pools.push(new Pool(i+1, tempFencers, this.weapon, size));
        }
    }

    getName(){return this.name;}
    getWeapon(){return this.weapon;}
    getFencers(){return this.fencers;}
    getPools(){return this.pools;}
}
module.exports = Event;
