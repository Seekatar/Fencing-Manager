/**
* Fencer class
* Jimmy Wallace 5/12/19
* holds name, ratings, and various scores such as victories, touches scored,
* touches received, and indicator
*/
class Fencer {

    constructor(name, epeeRating, foilRating, sabreRating){
        this.name = name;
        this.epeeRating = epeeRating || "U";
        this.foilRating = foilRating || "U";
        this.sabreRating = sabreRating || "U";

        this.victories = 0;
        this.touchesScored = 0;
        this.touchesReceived = 0;
    }

    /**
    * adds a bout to the fencer
    */
    addBout(win, scored, received){
        if(win === true){
            this.victories++;
        }
        this.touchesScored += scored;
        this.touchesReceived += received;
    }

    getName()
    {return this.name;}

    getRatings()
    {return new Array(this.epeeRating, this.foilRating, this.sabreRating);}

    getVictories()
    {return this.victories;}

    getTS()
    {return this.touchesScored;}

    getTR()
    {return this.touchesReceived;}

    getInd()
    {return this.touchesScored - this.touchesReceived;}
}

module.exports = Fencer;
