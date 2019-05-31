/**
* Card class
* Jimmy Wallace 5/29/19
* represents a penalty card
*/
class Card {

    /**
    * @param id the id number of the card (unique to each event)
    * @param fencer the fencer the card was issued to
    * @param color the color of the card (yellow, red, black)
    * @param reason the reason of the card (should cite a rule)
    */
    constructor(id, fencer, color, reason){
        this.id = id;
        this.fencer = fencer;
        this.color = color;
        this.reason = reason;
    }

    /**
    * @returns a readable version of the information in this class
    */
    info(){
        return this.color + " Card " + this.id + " was issued to " + this.fencer.getName() + " for reason: '" + this.reason + "'";
    }

    getID(){return this.id;}
    getFencer(){return this.fencer;}
    getColor(){return this.color;}
    getReason(){return this.reason;}
}
module.exports = Card;
