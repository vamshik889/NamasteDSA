//Approach - 1

function secondLargest(arr) {
  let first = -Infinity;

  let second;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < first && arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
}

let arr = [101, 99, 3, 44, 1, 5, 66, 2, 65, 88, 100, 105, 105];

const val = secondLargest(arr);
console.log(val);


//Approach 2 - Not recommended for interviews

let sortedArr = [...new Set(arr)].sort((a,b)=>a-b);
console.log(sortedArr[sortedArr.length-2])


