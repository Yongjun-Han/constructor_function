// 숫자 1부터 20까지 를 담은 배열 생성
//임의의 숫자 3개 추출하기  
const randomNumArr = [];

function randomNum (wantNumber,startNum,finishNum) {
  
  if (finishNum > startNum) {
    for(let i=0; i<wantNumber; i++) {
      let selectedNumber = Math.floor(Math.random() * (finishNum-startNum)+1);
      randomNumArr.push(selectedNumber);
      console.log(selectedNumber);
    }
  } else {
    console.log("숫자범위 지정이 잘못되었습니다");
  }
  
}
randomNum(3,1,20);
console.log(randomNumArr)

  // if((randomNumArr[0]+randomNumArr[1]+randomNumArr[2])/3 >= 10) {
  //   console.log("over")
  // } else if ((randomNumArr[0]+randomNumArr[1]+randomNumArr[2])/3 < 10) {
  //   console.log("under")
  // }
  
let count = 0;

for (let j=0; j<randomNumArr.length; j++) {
count +=  randomNumArr[j]
}
console.log(count)

if(count/3 >= 10) {
  console.log("over")
} else if (count/3 <10) {
  console.log("under")
}