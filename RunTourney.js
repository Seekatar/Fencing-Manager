const Fencer = require('./Fencer.js');
const Pool = require('./Pool.js');

/* Testing ********************************************************************/
const DEBUG = true;

let fencer0 = new Fencer("Jimmy Wallace","B");
let fencer1 = new Fencer("Patrick Malloy","B", "E");
let fencer2 = new Fencer("Nick Bampton"," C");

let pool1 = new Pool(1, [fencer0, fencer1, fencer2]);
let currentBout = pool1.getCurrentBout();

if (DEBUG)
    console.log("Bout Order: " + pool1.getOrder());

leftScores = [1,5,1];
rightScores = [5,3,5];
pool1.runPool(leftScores, rightScores);
