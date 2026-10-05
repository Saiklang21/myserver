// const utils = require('./utils').utils;

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

import { utils } from './utils.js';

function check(name: string, actual: boolean, expected: boolean) {
    if (actual !== expected) {
        console.log(`FAIL: ${name}`);
        process.exit(1);
    }
    console.log(`PASS: ${name}`);
}

// email
check("email ถูกต้อง", utils.isValidEmail("a@b.com"), true);
check("email ไม่มี @", utils.isValidEmail("ab.com"), false);
check("email ไม่มี domain", utils.isValidEmail("a@"), false);
check("email มีช่องว่าง", utils.isValidEmail("a @b.com"), false);
check("email ว่าง", utils.isValidEmail(""), false);

// age
check("age ปกติ", utils.isValidAge(20), true);
check("age = 0", utils.isValidAge(0), true);
check("age ติดลบ", utils.isValidAge(-1), false);
check("age เกิน 120", utils.isValidAge(121), false);
check("age ทศนิยม", utils.isValidAge(20.5), false);