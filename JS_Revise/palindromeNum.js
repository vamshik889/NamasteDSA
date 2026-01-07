// // function palindrome(n){

// //     let reversed = 0;
// //     let original = n;
// //     let container
// //     while(n>0){
// //         container = n%10;
// //         reversed= reversed*10+container
// //         n= Math.floor(n/10)
// //     }
// //     return original == reversed

// // }

// // let res = palindrome(1299021);
// // console.log(res)

// // function bruteForce(num){
// //     if(num<0){
// //         return false;
// //     }
// //     if(num>=0 && num<10){ //handling the single digit number
// //         return true
// //     }
// //     let original = num;
// //     let str = "" +num
// //     let rev = (num+"").split("").reverse().join("")
// //     // console.log(rev,str)
// //     return original === Number(rev)
// // }
// // const res1 = bruteForce(0)
// // const res2 = bruteForce(888)
// // // console.log(res1,res2)


// let arr = [1,1,2]

// function unique(nums){

//     let arr = []
//     for(let item of nums){
//         if(!arr.includes(item)){
//             arr.push(item)
//         }
//     }
// return arr;
// }

// const res = unique(arr);
// console.log(res)

let removeDuplicates = function(nums) {

for(let i=0;i<nums.length;i++){
    let temp = nums.slice(0,i);
    if(temp.includes(nums[i])){
        nums.splice(i,1)
    }
}
return nums

};
let arr = [1,2,3,1,2,4,4]
const res = removeDuplicates(arr)
console.log(res)