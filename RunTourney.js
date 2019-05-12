const Fencer = require('./Fencer.js');
const Pool = require('./Pool.js');

/* Testing ********************************************************************/
let fencer0 = new Fencer("Jimmy Wallace","B");
let fencer1 = new Fencer("Patrick Malloy","B", "E");
let fencer2 = new Fencer("Nick Bampton"," C");
let fencer3 = new Fencer("Tan Le", "", "", "E");

let pool1 = new Pool(1, [fencer0, fencer1, fencer2, fencer3]);

console.log(pool1.getFencers());
console.log(pool1.getOrder());
