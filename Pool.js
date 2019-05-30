/**
* Pool class
* Jimmy Wallace 5/12/19
* holds the pool number, the fencers in the pool, the order of the pool and
* is used to calculate results of the pool
*/

const DEBUG = true;

class Pool {

    /**
    * @param number the number of fencers
    * @param fencers an array of fencers in the pool
    * @param weapon the weapon for this pool (epee/foil/sabre)\
    * @param size may or may not be used
    */
    constructor(number, fencers, weapon, size){
        this.number = number;
        this.size = size;
        this.currBout = 0;
        this.bouts = [];

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

    addFencers(fencers){
        this.fencers = fencers;
        this.numFencers = this.fencers.length;
        setOrder();
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

    addBouts(){
        for (var i = 0; i < this.numFencers; i++){
            let temp = getCurrentBout();
            let left = temp[0];
            let right = temp[1];

            this.bouts.push(new Bout(left, right));
        }
    }

    /**
    * @return an array of two fencers
    * the first element is the left fencer and the second element is
    * the right fencer
    */
    getCurrentBout(){
        let rightFencerNum = (Math.floor(this.order[this.currBout] / 10)) - 1;
        let leftFencerNum = (this.order[this.currBout] % 10) - 1;

        return [this.fencers[leftFencerNum], this.fencers[rightFencerNum]];
    }


    /**
    * @param leftScore the score for the left fencer
    * @param rightScore the score for the right fencer
    * @return the winner of the bout
    * lets the user score a bout
    * determines if the left fencer has won, if they have, add a victory
    * to that fencer object as well as the scored and recieved touches
    * if the left fencer has not won, the above is done to the right fencer
    */
    scoreBout(leftScore, rightScore){
        let arry = this.getCurrentBout();
        let leftFencer = arry[0];
        let rightFencer = arry[1];

        if (DEBUG){
            console.log("\nBout " + this.currBout +":");
            console.log("   FOTL is: " + leftFencer.getName());
            console.log("   FOTR is: " + rightFencer.getName());
            console.log("   FOTL score:" + leftScore);
            console.log("   FOTR score:" + rightScore);
        }

        // left fencer won
        if (leftScore > rightScore){
            leftFencer.addBout(true, leftScore, rightScore);
            rightFencer.addBout(false, rightScore, leftScore);

            return leftFencer;
        }

        // right fencer won
        rightFencer.addBout(true, leftScore, rightScore);
        leftFencer.addBout(false, rightScore, leftScore);

        return rightFencer;
    }

    /**
    * @param leftScores the scores for the entire pool for the left fencers
    * @param rightScores the scores for the entire pool for the right fencers
    * @throws an exception if the leftScores or rightScores arrays are not the
    * correct size
    * runs the pool based on two score arrays
    */
    runPool(leftScores, rightScores){
        if (leftScores.length != this.order.length || rightScores.length != this.order.length){
            throw "<!> Error <!> the score array for left or right scores is not the correct size!"
        }

        for (var i = 0; i < this.order.length; i++){
            let winner = this.scoreBout(leftScores[i], rightScores[i]);

            if (DEBUG)
                console.log("Winner of bout " + i + " is " + winner.getName());

            this.nextBout();
        }
    }

    nextBout(){this.currBout++;}

    getOrder(){return this.order;}

    getFencers(){return this.fencers;}
}

module.exports = Pool;
