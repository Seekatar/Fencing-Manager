/**
* Pool class
* Jimmy Wallace 5/12/19
* holds the pool number, the fencers in the pool, the order of the pool and
* is used to calculate results of the pool
*/

const Bout = require('./Bout.js');

const DEBUG = true;

class Pool {

    /**
    * @param fencers an array of fencers in the pool
    * @param weapon the weapon for this pool (epee/foil/sabre)\
    * @param size may or may not be used
    */
    constructor(fencers, weapon){
        this.currBout = 0;
        this.bouts = [];
        this.places = [];

        if(fencers){
            this.fencers = fencers;
            this.numFencers = this.fencers.length;
            this.order = this.setOrder();
        }
        else{
            console.log("<!> WARNING <!> Fencer array is empty, you must manually call Pool.addFencers()")
            this.numFencers = 0;
        }
    }

    /**
    * @param fencers an array of fencers
    * adds fencers to the pool if they were not added at the creation of the
    * pool
    * calls set order after adding the fencers
    */
    addFencers(fencers){
        this.fencers = fencers;
        this.numFencers = this.fencers.length;
        setOrder();
    }

    addBoutsToFencers(){
        for (var i = 0; i < this.bouts.length; i++){
            leftFencer = this.bouts[i].getFOTL();
            rightFencer = this.bouts[i].getFOTR();

            leftFencer.addBoutObj(this.bouts[i]);
            rightFencer.addBoutObj(this.bouts[i]);
        }
    }

    /**
    * @return an array of numbers representing the order of the pool
    * sets the order for the pool based on the number of fencers
    * number of fencers must be between 2 and 7
    */
    setOrder(){
        var temp;
        switch(this.numFencers){
            case 2:
                temp = [12];
                break;
            case 3:
                temp = [12, 23, 13];
                break;
            case 4:
                temp = [14, 23, 13, 24, 34, 12];
                break;
            case 5:
                temp = [12, 34, 51, 23, 54, 13, 25, 41, 35, 42];
                break;
            case 6:
                temp = [12, 45, 23, 56, 31, 64, 25, 14, 53, 16, 42, 36, 51, 34, 62];
                break;
            case 7:
                temp = [14, 25, 36, 71, 54, 23, 67, 51, 43, 62, 57, 31, 48, 72, 35, 16, 24, 73, 65, 12, 47];
                break;
            default:
                console.log(this.numFencers + " is not a valid number of fencers");
                break;
        }
        return temp;
    }

    /**
    * creates unscored bouts and adds them to the pool
    */
    addBouts(size=0){
        if (!size){
            size = this.numFencers;
        }

        for (var i = 0; i < size; i++){
            let temp = this.getCurrentFencers();
            let left = temp[0];
            let right = temp[1];

            this.bouts.push(new Bout(left, right));
            this.nextBout();
        }
    }

    /**
    * @return an array of two fencers
    * the first element is the left fencer and the second element is
    * the right fencer
    */
    getCurrentFencers(){
        let rightFencerNum = (Math.floor(this.order[this.currBout] / 10)) - 1;
        let leftFencerNum = (this.order[this.currBout] % 10) - 1;

        return [this.fencers[leftFencerNum], this.fencers[rightFencerNum]];
    }

    /**
    * @param leftScores the scores for the left fencer
    * @param rightScores the scores for the right fencer
    * goes through the array of bouts and scores them based on the two input
    * arrays
    * after scoring them they "finish" the bouts by calculating which fencer won
    * the bout and adding the stats to each fencer (stats: V, TS, TR, I)
    */
    scoreBouts(leftScores, rightScores){
        for (var i = 0; i < this.bouts.length; i++){
            this.bouts[i].score(leftScores[i], rightScores[i]);

            this.bouts[i].finish();

            var currFencers = this.getCurrentFencers();
            currFencers[0].addBoutObj(this.bouts[i]);
            currFencers[1].addBoutObj(this.bouts[i]);

        }
    }

    calcResults(){
        for (var i = 0; i < this.fencers.length; i++){
            this.fencers[i].scoreBouts();
        }
    }

    nextBout(){this.currentBout++;}
    getOrder(){return this.order;}
    getFencers(){return this.fencers;}
}

module.exports = Pool;
