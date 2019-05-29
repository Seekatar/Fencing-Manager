/**
* Bout Class
* Jimmy Wallace 5/29/19
* Stores a bout
*/
class Bout(){

    /**
    * @param FOTL fencer on the left
    * @param FOTR fencer on the right
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
        this.maxTime = maxTime;
        this.period = period;
        this.maxPeriods = maxPeriods;
        this.cards = cards;
    }
}
module.exports = Bout;
