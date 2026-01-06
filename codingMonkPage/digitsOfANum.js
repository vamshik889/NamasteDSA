//approach-1 -brute force

function count(n){
    if(n===0){ //corner case1
        return 1
    }
    n = Math.abs(n) //corner case2 - handling negative number to positive since the loop condition is n>0 
    let res = 0;
    while(n>0){
        n=Math.floor(n/10)
        res++
    }
    return res;

}
const res = count(-999)
console.log(res)

//optimal

function countDigits(n){
    return Math.floor(Math.log10(n)+1)
}
const res2 = countDigits(6000000);
console.log(res2)