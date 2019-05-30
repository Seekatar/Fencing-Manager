/**
* Direct Elimination Bracket class
* Jimmy Wallace 5/30/19
*/
class DE{

    /**
    * @param eventName the name of the event
    * @param maxBracket the highest number bracket that will be used
    * @param currBracket the current bracket for the DE, will always start at
                         maxBracket
    * @param fencers an array of the fencers that will be in the table
    */
    constructor(eventName, maxBracket, currBracket, fencers){
        this.eventName = eventName;
        this.maxBracket = maxBracket;
        this.currBracket = this.maxBracket;
        this.fencers = fencers;
        this.numFencers = this.fencer.length;
        this.numByes = this.maxBracket - this.numFencers;
        this.bouts = [];
    }

    getEventName(){return this.eventName;}
    getMaxBracket(){return this.maxBracket;}
    getCurrBracket(){return this.currBracket;}
    getFencers(){return this.fencers;}
    getNumFencers(){return this.numFencers;}
    getNumByes(){return this.numByes;}
}
