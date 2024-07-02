function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let delimiter: RegExp = /[\n,]/;
  if (numbers.startsWith("//")) {
    const delimiterEnd: number = numbers.indexOf("\n");
    delimiter = new RegExp(
      numbers.substring(2, delimiterEnd).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    numbers = numbers.substring(delimiterEnd + 1);
  }

  const nums: string[] = numbers.split(delimiter);
  const negatives: string[] = nums.filter((num) => parseInt(num) < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return nums.reduce((sum, num) => sum + (parseInt(num) || 0), 0);
}

export default add;
