const Fencer = require('./Fencer.js');
const Pool = require('./Pool.js');
const Event = require('./Event.js');

/* Testing ********************************************************************/
const POOL_TEST = false;
const EVENT_TEST = true;

let fencer0 = new Fencer("Jimmy Wallace","B");
let fencer1 = new Fencer("Patrick Malloy","B", "E");
let fencer2 = new Fencer("Nick Bampton"," C");

if (POOL_TEST){
    let pool1 = new Pool(1, [fencer0, fencer1, fencer2]);
    let currentBout = pool1.getCurrentBout();

    console.log("Bout Order: " + pool1.getOrder());

    leftScores = [1,5,1];
    rightScores = [5,3,5];
    pool1.runPool(leftScores, rightScores);
}

if (EVENT_TEST){
    let e = new Event("test", "epee", [fencer0, fencer1, fencer2]);

    console.log(e.getName());
    console.log(e.getWeapon());
    console.log(e.getFencers());
    console.log(e.getPools());

    e.createPools();

    console.log(e.getPools());
}
