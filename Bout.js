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
    * @param maxScore the max score for the bout (5, 10, 15)
    * @param time the time elapsed in the bout
    * @param maxTime the max time elapsed in the bout (3, 6, 9)
    * @param period the period the bout ended in (max of 1 for pools)
    * @param maxPeriods the max number of periods for the bout (1, 3)
    * @param cardss an array of cards given in the bout
    */
    constructor(FOTL, FOTR, leftScore=0, rightScore=0, jmaxScore, time, maxTime, period, maxPeriods, cards=null){
        this.FOTL = FOTL;
        this.FOTR = FOTR;
        this.leftScore = leftScore;
        this.maxScore = maxScore;
        this.time = time;
        this.maxTime = maxTime;
        this.period = period;
        this.maxPeriods = maxPeriods;
        this.cards = cards;
    }
}
module.exports = Bout;
