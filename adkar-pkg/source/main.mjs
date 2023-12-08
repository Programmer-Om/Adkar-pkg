"use strict";
const RTLArabic = require("rtl-arabic");
let adkar = [" الحمد لله "," الله أكبر "," سبحان الله "," لا اله الا الله "," لا حول و لا قوة الا بالله "];
let enable = true;
let interval = 5;

                                  // Main source :

function add(...dkr) {
  adkar.push(dkr);
};

function setTime(newinterval) {
  interval = newinterval;
};


// These are the default options for rtl-arabic pkg
const options = {
  harakat: true,
  numbers: false,
  multiline: true,
};

const adkarView = new RTLArabic(`${adkar}`,options).convert();

if (enable === true) {
  setInterval(() => {
    console.log(adkarView);
  }, interval*1000);
}

                                  // End of main source
// Secondary Functions :
function AdkarStatus(status) {
  if (status === "enable") {
    enable = true;
  } else {
    enable = false;
  };
};
module.exports={
  add,setTime,AdkarStatus
}