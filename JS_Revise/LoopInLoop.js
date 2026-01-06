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
      if (i === 0 || i === sides - 1) {
        bag += "*";
      } else if (j === 0 || j === sides - 1) {
        bag += "*";
      } else {
        bag += " ";
      }
    }
    console.log(bag);
  }
}

hollowRectangle();

function numRightAngle(n) {
  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += j;
    }
    console.log(star);
  }
}
numRightAngle(7);

//approach - 1
function revRightAngle(n) {
  for (let i = n; i > 0; i--) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += j;
    }
    console.log(star);
  }
}
revRightAngle(6);

//approach - 2

function revDigit(n){

for(let i=1;i<n;i++){
  let star = ""
  for(let j=1;j<=n-i;j++){
    star+=j
  }
  console.log(star)
}
}

revDigit(6)

//approach - 1
for(let i=5;i>0;i--){
  let star = ""
  for(let j=1;j<=5;j++){
    if(j>=i){
      star+="*"
    }
    else{
      star+=" "
    }
  }
  console.log(star)
}

//approach -2 

function rev(n){

for(let i=1;i<=n;i++){
  let star = ""
  for(let j = 0;j<n-i;j++){
    star+=" "
  }
  for(let k=0;k<i;k++){
    star+="*"
  }
  console.log(star)
}

}   //wrong - needs to improve

rev(6)

function rev2(n){
  for(let i=0;i<=n;i++){
    let num = ""
    let switc = 1;
    for(let j=0;j<=i;j++){
      num+=switc
      switc===0?switc=1:switc=0
    }
    console.log(num)
  }
}
rev2(6)

function rev3(n){
    let switc = 1;
  for(let i=0;i<=n;i++){
    let num = ""
    for(let j=0;j<=i;j++){
      num+=switc
      switc===0?switc=1:switc=0
    }
    console.log(num)
  }
}
rev3(6)