/**
* Pool class
* Jimmy Wallace 5/12/19
* holds the pool number, the fencers in the pool, the order of the pool and
* is used to calculate results of the pool
*/
class Pool{

    constructor(_number, _fencers){
        this.number = _number;
        this.fencers = _fencers;
        this.numFencers = this.fencers.length;
        this.order = this.setOrder();
    }

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

    nextBout(){
        
    }

    getOrder(){return this.order;}

    getFencers(){return this.fencers;}
}

module.exports = Pool;
