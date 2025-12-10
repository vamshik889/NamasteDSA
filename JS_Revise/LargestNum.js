let arr = [1000,1,2,3,4,555,6,77,22,33,5,999]

function largestNum(arr){
    let largest = -Infinity;
    
    // arr.forEach(ele => {
    //     if(ele>largest){
    //         largest = ele
    //     }
    // });


    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest
}

let largest = largestNum(arr);
console.log(largest)