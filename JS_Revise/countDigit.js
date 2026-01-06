//write a function that returns the count of digits in a number

//brute force

function digit(n) {
  let str = "";
  str += n;

  return str.length;
}

const count = digit(6666);
console.log(count);

//optimal

function countDigits(num){

    let count = 0;
    while(num>0){
        num = Math.floor(num/10)
       count++
    }
    return count
}
const res = countDigits(10888);
console.log(res)