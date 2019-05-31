/**
* Fencer class
* Jimmy Wallace 5/12/19
* holds name, ratings, and various scores such as victories, touches scored,
* touches received, and indicator
*/
const Bout = require('./Bout.js');

class Fencer {

    /**
    * @param name the name of the fencer
    * @param epeeRating the epee rating of the fencer
    * @param foilRating the foil rating of the fencer
    * @param sabreRating the sabre rating of the fencer
    * @param bouts the bouts for this fencer
    */
    constructor(name, epeeRating, foilRating, sabreRating){
        this.name = name;
        this.epeeRating = epeeRating || "U";
        this.foilRating = foilRating || "U";
        this.sabreRating = sabreRating || "U";

        this.victories = 0;
        this.touchesScored = 0;
        this.touchesReceived = 0;

        this.bouts = [];
    }

    /**
    * @param bout a bout object to be added to this fencers bout array
    */
    addBoutObj(bout){
        this.bouts.push(bout);
    }

    /**
    * @param win boolean, whether they won the bout or not
    * @param scored the points scored
    * @param received the points received
    * adds a bout to the fencer
    */
    scoreBouts(){
        for (var i = 0; i < this.bouts.length; i++){
            if (this.equals(winner)){
                this.victories++;
            }
            this.touchesScored += this.bouts[i].getScored(this);
            this.touchesReceived += this.bouts[i].getRec(this);
        }
    }

    /**
    * @precondition other object must be a fencer object
    * @param other anothe fencer object
    * @return whether or not another fencer object is equal to this
    */
    equals(other){
        if (other === null)
            throw "<!> ERROR <!> other is null"
        if (typeof(other) != Fencer)
            throw "<!> ERROR <!> other is not a fencer object"
        if (this.name === other.name &&
            this.epeeRating === other.epeeRating &&
            this.foilRating === other.FoilRating &&
            this.sabreRating === other.FoilRating){
                return true;
            }
        else{
            return false;
        }
    }

    getName(){return this.name;}
    getRatings(){return new Array(this.epeeRating, this.foilRating, this.sabreRating);}
    getVictories(){return this.victories;}
    getTS(){return this.touchesScored;}
    getTR(){return this.touchesReceived;}
    getInd(){return this.touchesScored - this.touchesReceived;}
}

module.exports = Fencer;
