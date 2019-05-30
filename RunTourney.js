const Fencer = require('./Fencer.js');
const Pool = require('./Pool.js');
const Event = require('./Event.js');
const Tournament = require('./Tournament.js');
const Card = require('./Card.js');

/* Testing ********************************************************************/
const POOL_TEST = false;
const EVENT_TEST = false;
const TOURNEY_TEST = false;
const CARD_TEST = false;
const RESULT_TEST = true;

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

    console.log(e.getPools());

    e.createPools();

    console.log(e.getPools());
}

if (TOURNEY_TEST){
    let t = new Tournament("test");
    t.addEvent("Div 1 ME", "epee", [fencer0, fencer1, fencer2], true);
    console.log(t.getName());
    console.log(t.getEvents());
}

if (CARD_TEST){
    let c = new Card(1, fencer0, "Yellow", "weapon failed when presenting for testing")
    console.log(c.info());
}

if (RESULT_TEST){
    let pool1 = new Pool(1, [fencer0, fencer1, fencer2]);
    leftScores = [1,5,1];
    rightScores = [5,3,5];
    pool1.addBouts(leftScores, rightScores);
    
}
