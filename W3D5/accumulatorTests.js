"use strict";
/* global assert Accumulator */
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.  
*/
const assert = require("assert");  //always need this with node
const myExports = require("./accumulator.js");  //with node need the name of your file with your functions here
const Accumulator = myExports.Accumulator;  //do this for all of the functions used in the Mocha tests


describe("accumulator", function () {


    it("checks initialValue and increment", function () {
        const accumulator = new Accumulator(5, 10);
        assert.strictEqual(accumulator.currentValue, 5);
        assert.strictEqual(accumulator.increment, 10);
    });

    it("checks accumulate", function () {
        const accumulator = new Accumulator(5, 10);
        accumulator.accumulate();
        accumulator.accumulate();
        assert.strictEqual(accumulator.currentValue, 25);
        assert.strictEqual(accumulator.increment, 10);
    });    

    it("checks report", function () {
        const accumulator = new Accumulator(5, 10);
        assert.strictEqual(accumulator.report(), 5);
    });    

});