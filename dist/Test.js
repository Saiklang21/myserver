"use strict";
// const utils = require('./utils').utils;
Object.defineProperty(exports, "__esModule", { value: true });
// const unit_test = async () => {
//     if(utils.add(2,3) === 6) {
//         console.log("Test Case 1: utils.add(2,3) === 6");
//         process.exit(1);
//     }
//     if(utils.add(2,4) === 10) {
//     } else {
//         console.log("Test Case 2: utils.add(2,3) === 10");
//         process.exit(1);
//     }
// }
// unit_test();
const utils_js_1 = require("./utils.js");
function check(name, actual, expected) {
    if (actual !== expected) {
        console.log(`FAIL: ${name}`);
        process.exit(1);
    }
    console.log(`PASS: ${name}`);
}
// email
check("email ถูกต้อง", utils_js_1.utils.isValidEmail("a@b.com"), true);
check("email ไม่มี @", utils_js_1.utils.isValidEmail("ab.com"), false);
check("email ไม่มี domain", utils_js_1.utils.isValidEmail("a@"), false);
check("email มีช่องว่าง", utils_js_1.utils.isValidEmail("a @b.com"), false);
check("email ว่าง", utils_js_1.utils.isValidEmail(""), false);
// age
check("age ปกติ", utils_js_1.utils.isValidAge(20), true);
check("age = 0", utils_js_1.utils.isValidAge(0), true);
check("age ติดลบ", utils_js_1.utils.isValidAge(-1), false);
check("age เกิน 120", utils_js_1.utils.isValidAge(121), false);
check("age ทศนิยม", utils_js_1.utils.isValidAge(20.5), false);
