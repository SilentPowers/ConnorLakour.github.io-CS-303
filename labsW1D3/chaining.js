"use strict";

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    console.log(this.step);
  }
};

ladder.up();
ladder.showStep();