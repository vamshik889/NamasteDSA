function largestDigit(num) {
  let max = -Infinity;

  while (num > 0) {
    let temp = num % 10;
    if (temp > max) {
      max = temp;
    }
    num = Math.floor(num / 10);
  }
  return max;
}

const res = largestDigit(876);
console.log(res);
