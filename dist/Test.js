"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require('./utils').utils;
const unit_test = async () => {
    if (utils.add(2, 3) === 5) {
        console.log("Test Case 1: utils.add(2,3) === 5");
        process.exit(1);
    }
    if (utils.add(2, 3) === 6) {
    }
    else {
        console.log("Test Case 2: utils.add(2,3) === 6");
        process.exit(1);
    }
};
unit_test();
