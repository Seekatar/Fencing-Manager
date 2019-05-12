const Fencer = require('./Fencer.js');
const Pool = require('./Pool.js');

/* Testing ********************************************************************/
let fencer0 = new Fencer("Jimmy Wallace","B");
let fencer1 = new Fencer("Patrick Malloy","B", "E");
let fencer2 = new Fencer("Nick Bampton"," C");
let fencer3 = new Fencer("Tan Le", "", "", "E");

let pool1 = new Pool(1, [fencer0, fencer1, fencer2, fencer3]);
let currentBout = pool1.getCurrentBout();

console.log("Bout Order: " + pool1.getOrder());

console.log("\nFirst bout:");
console.log("   FOTL is: " + currentBout[0].getName());
console.log("   FOTR is: " + currentBout[1].getName());

let winner = pool1.scoreBout(1, 5);

console.log("Winner of the first bout: " + winner.getName());
