/**
* Card class
* Jimmy Wallace 5/29/19
* represents a penalty card
*/
class Card {

    /**
    * @param id the id number of the card (unique to each event)
    * @param fencer the fencer the card was issued to
    * @param reason the reason of the card (should cite a rule)
    */
    constructor(id, fencer, reason){
        this.id = id;
        this.fencer = fencer;
        this.reason = reason;
    }

    getID(){return this.id;}
    getFencer(){return this.fencer;}
    getReason(){return this.reason;}
}
