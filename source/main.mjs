"use strict";
const RTLArabic = require("rtl-arabic");
let adkar = [" الحمد لله "," الله أكبر "," سبحان الله "," لا اله الا الله "," لا حول و لا قوة الا بالله "];
let enable = true;
let interval = 5000;

function add(...dkr) {
  adkar.push(dkr);
};

function SetInterval(newinterval) {
  interval = newinterval;
};


// These are the default options
const options = {
  harakat: true,
  numbers: false,
  multiline: true,
};

const adkarView = new RTLArabic(`${adkar}`,options).convert();

if (enable === true) {
  setInterval(() => {
    console.log(adkarView);
  }, interval);
}
