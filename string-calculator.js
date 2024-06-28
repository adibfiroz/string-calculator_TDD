
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
    return nums.reduce((sum, num) => sum + (parseInt(num) || 0), 0);
}

module.exports = add;