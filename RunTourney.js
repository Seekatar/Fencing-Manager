const Fencer = require('./Fencer.js');
const Pool = require('./Pool.js');
const Event = require('./Event.js');
const Tournament = require('./Tournament.js');
const Card = require('./Card.js');
const Bout = require('./Bout.js');

/* Testing ********************************************************************/
const POOL_TEST = false;
const EVENT_TEST = false;
const TOURNEY_TEST = false;
const CARD_TEST = false;

/*

1. create tournament
2. add fencers
3. add event
4. create pool
5. add fencers to pool
    a. add bouts to fencers though pool
6. gather scores
7. score bouts through pools
    a. pool will score bouts for each fencer
8. get pool results
    a. seed for DEs
9. create DE table
10. run through DEs
    a. add more bouts to fencers
    b. more results with fencers
11. event results

*/

// create Tournament
var myTournament = new Tournament("test tournament");

// create fencers
let fencer0 = new Fencer("Jimmy Wallace","B");
let fencer1 = new Fencer("Patrick Malloy","B", "E");
let fencer2 = new Fencer("Nick Bampton"," C");

// add event
myTournament.addEvent("Div I ME", "Epee", [fencer0, fencer1, fencer2], true);

// create pool and add fencers to pools
myTournament.getEvents()[0].createPools();

//console.log("Fencers in " + myTournament.getEvents()[0].getName() + ": ", myTournament.getEvents()[0].getPools()[0].getFencers());

leftScores = [1,5,1];
rightScores = [5,3,5];

// scores the pool
myTournament.getEvents()[0].getPools()[0].scoreBouts(leftScores, rightScores);
myTournament.getEvents()[0].getPools()[0].calcResults();
console.log(myTournament.getEvents()[0].getPools()[0].getFencers()[0].getVictories());


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
