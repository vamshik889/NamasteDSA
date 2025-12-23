// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < i; j++) {
//     console.log("i=" + i, "j=" + j);
//   }
// }

// for(let i=5;i>0;i--){
//     for(let j=0;j<i;j++){
//         console.log("i = ",i +" "+ "j = ",j)
//     }
// }

function rightAngleTriangle(sides = 3) {
  for (let i = 0; i < sides; i++) {
    let bag = "";
    for (let j = 0; j <= i; j++) {
      bag += "*";
    }
    console.log(bag);
  }
}
// rightAngleTriangle(5);

function hollowRectangle(sides = 5) {
  for (let i = 0; i < sides; i++) {
    let bag = "";

    for (let j = 0; j < sides; j++) {
    
        if(i===0 || i===sides-1){
            bag+="*"
        }
        else if(j===0 || j===sides-1){
            bag+="*"
        }
        else{
            bag+=" "
        }
    }
    console.log(bag);
  }
}

hollowRectangle();
