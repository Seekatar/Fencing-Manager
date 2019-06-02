const Pool = require('../../Pool.js');
const Fencer = require('../../Fencer.js');
const Event = require('../../Event.js');
const Tournament = require('../../Tournament.js');

const fencer0 = new Fencer("Jimmy Wallace","B");
const fencer1 = new Fencer("Patrick Malloy","B", "E");
const fencer2 = new Fencer("Nick Bampton"," C");

// Jest doc https://jestjs.io/docs/en/getting-started.html

test('pool test', () => {
    const pool1 = new Pool(1, [fencer0, fencer1, fencer2]);

    leftScores = [1,5,1];
    rightScores = [5,3,5];
    pool1.scoreBouts(leftScores, rightScores);
    expect('1').toBe('1');
})

test('event test', () => {
    const e = new Event("test", "epee", [fencer0, fencer1, fencer2]);

    expect(e.getPools().length).toBe(0);

    e.createPools();

    expect(e.getPools().length).toBe(1);
})

test('tournament test', () => {
    const t = new Tournament("test");
    t.addEvent("Div 1 ME", "epee", [fencer0, fencer1, fencer2], true);
    expect(t.getName()).toBe("test");
    expect(t.getEvents().length).toBe(1);
})
