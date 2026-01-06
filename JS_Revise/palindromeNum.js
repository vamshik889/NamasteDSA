function palindrome(n){

    let reversed = 0;
    let original = n;
    let container
    while(n>0){
        container = n%10;
        reversed= reversed*10+container
        n= Math.floor(n/10)
    }
    return original == reversed

}

let res = palindrome(1299021);
console.log(res)

function bruteForce(num){
    if(num<0){
        return false;
    }
    if(num>=0 && num<10){
        return true
    }
    let original = num;
    let str = "" +num
    let rev = (num+"").split("").reverse().join("")
    // console.log(rev,str)
    return original === Number(rev)
}
const res1 = bruteForce(0)
const res2 = bruteForce(888)
// console.log(res1,res2)

