/**
* Bout Class
* Jimmy Wallace 5/29/19
* Stores a bout
*/
class Bout{

    /**
    * @param FOTL (required) fencer on the left
    * @param FOTR (required) fencer on the right
    * @param leftScore the score for FOTL
    * @param rightScore the score for FOTR
    * @param time the time elapsed in the bout
    * @param cards an array of cards given in the bout
    */
    constructor(FOTL, FOTR, leftScore=0, rightScore=0, time=0, cards=null){
        this.FOTL = FOTL;
        this.FOTR = FOTR;
        this.leftScore = leftScore;
        this.rightScore = rightScore;
        this.time = time;
        this.cards = cards;
    }

    /**
    * @param left the left score
    * @param right the right score
    * @param time the time the bout took
    * @param cards any cards issued during the bout
    * scores the bout if it wasn't scored on creation
    */
    score(left, right, time , cards){
        this.leftScore = leftScore;
        this.rightScore = rightScore;
        this.time = time;
        this.cards = cards;
    }

    getFOTL(){return this.FOTL;}
    getFOTR(){return this.FOTR;}
    getLeftScore(){return this.leftScore;}
    getRightScore(){return this.rightScore;}
    getTime(){return this.time;}
    getCards(){return this.cards;}
}
module.exports = Bout;
