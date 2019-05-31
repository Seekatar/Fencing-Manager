/**
* Bout Class
* Jimmy Wallace 5/29/19
* Stores a bout
*/
class Bout{

    /**
    * @param id the id for the bout, there could be duplicates, uniqueness is
                only for each fencer
    * @param FOTL (required) fencer on the left
    * @param FOTR (required) fencer on the right
    * @param leftScore the score for FOTL
    * @param rightScore the score for FOTR
    * @param time the time elapsed in the bout
    * @param cards an array of cards given in the bout
    */
    constructor(id, FOTL, FOTR, leftScore=0, rightScore=0, time=0, cards=null){
        this.id = id;
        this.FOTL = FOTL;
        this.FOTR = FOTR;
        this.leftScore = leftScore;
        this.rightScore = rightScore;
        this.time = time;
        this.cards = cards;
        this.winner = null;
        this.loser = null;
    }

    /**
    * @param left the left score
    * @param right the right score
    * @param cards any cards issued during the bout
    * scores the bout if it wasn't scored on creation
    */
    score(left, right, cards=null){
        this.leftScore = left;
        this.rightScore = right;
        this.cards = cards;
    }

    finish(){
        // left fencer wins
        if (this.leftScore > this.rightScore){
            console.log("left win");
            this.winner = this.FOTL;
            this.loser = this.FOTR;
        }
        // right fencer wins
        else{
            console.log("left win");
            this.winner = this.FOTR;
            this.loser = this.FOTL;
        }
    }

    /**
    * @param fencer a fencer
    */
    getScored(fencer){
        if (fencer.equals(this.FOTL)){
            return this.leftScore;
        }
        return this.rightScore;
    }

    /**
    * @param fencer a fencer
    */
    getRec(fencer){
        if (!fencer.equals(this.FOTL)){
            return this.leftScore;
        }
        return this.rightScore;
    }

    getFOTL(){return this.FOTL;}
    getFOTR(){return this.FOTR;}
    getLeftScore(){return this.leftScore;}
    getRightScore(){return this.rightScore;}
    getCards(){return this.cards;}
    getWinner(){return this.winner;}
    getLoser(){return this.loser;}
}
module.exports = Bout;
