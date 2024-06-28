
function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    
    const nums = numbers.split(",");
    if (nums.length === 1) {
        return parseInt(nums[0]);
    }
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;