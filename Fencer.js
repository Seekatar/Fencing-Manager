/**
* Fencer class
* Jimmy Wallace 5/12/19
* holds name, ratings, and various scores such as victories, touches scored,
* touches received, and indicator
*/
class Fencer {

    /**
    * @param name the name of the fencer
    * @param epeeRating the epee rating of the fencer
    * @param foilRating the foil rating of the fencer
    * @param sabreRating the sabre rating of the fencer
    */
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
    * @param win boolean, whether they won the bout or not
    * @param scored the points scored
    * @param received the points received
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
