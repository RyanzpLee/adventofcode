var fs = require('fs')

const text = fs.readFileSync("./input.txt").toString();
const nums = text.split("\r\n").map(Number);

nums.sort((a, b) => a - b)

let numbers = [];
let target = 2020;

for (let i = 0;i < nums.length; i++) {

    // Set up the pointers to traverse array
    let left = i + 1;
    let right = nums.length - 1;


    // Because array is sorted, if it's less than target we move left pointer
    // If it's more than the target, then we move the right pointer so we eventually
    // Meet in the middle
    while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];

        if (sum < target) left++;
        else if (sum > target) right--;
        else {
            numbers.push([nums[i], nums[left], nums[right]])
            left++;
            right--;

            while (left < right && nums[left] === nums[left - 1]) left++;
        }
    }
}

console.log(numbers[0].reduce((a, b) => a* b))