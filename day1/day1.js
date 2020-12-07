var fs = require('fs')

const text = fs.readFileSync("./input.txt").toString();
const nums = text.split("\r\n").map(Number);

let dict = {};
const target = 2020;
let answer;

for (let i = 0; i < nums.length; i++) {
    let m = target - nums[i]

    if (dict[m]) {
        answer = ([dict[m], m])
    } else {
        dict[nums[i]] = m
    }
};

console.log(answer[0]* answer[1])