
function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const delimiterEnd = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterEnd).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        numbers = numbers.substring(delimiterEnd + 1);
    }
    
    const nums = numbers.split(delimiter);
    const negatives = nums.filter(num => parseInt(num) < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }
    return nums.reduce((sum, num) => sum + (parseInt(num) || 0), 0);
}

module.exports = add;