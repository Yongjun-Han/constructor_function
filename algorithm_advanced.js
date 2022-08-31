// Advanced
// a. 1부터 20까지의 범위 중 임의의 3개의 숫자가 중복되지 않은 난수를 배열, inputData에 담기도록 처리하시오.
const inputData = [];

function randomNum (wantNumber,startNum,finishNum) {
  
  if (finishNum > startNum) {
    for(let i=0; i<wantNumber; i++) {
      let selectedNumber = Math.floor(Math.random() * (finishNum-startNum)+1);
      // input 데이터에 selectedNumber 가 없으면 PUSH 한다 
      if (inputData.indexOf(selectedNumber) === -1) { 
        inputData.push(selectedNumber);
      } else {
        i-- //input 데이터에 selectedNumber이 겹칠경우 다시 i 턴을 돈다
      }
      // console.log(selectedNumber);
    }
  } else {
    console.log("숫자범위 지정이 잘못되었습니다");
  }
  
}
randomNum(3,1,20);
console.log(inputData)

// b. 객체 objectData의 property인 key, "first", "second", "third"에 주문 a를 통해 얻은 데이터를 각각의 키(key)의 값으로 삽입(insert)하시오.


const objectData = { 
  first : 0, 
  second : 0, 
  third: 0
};

// for (let key in objectData) {
//   console.log(key);
// }

// 일일이 지정 X --> for in ??
objectData.first = inputData[0]
objectData.second = inputData[1]
objectData.third = inputData[2] 

console.log(objectData);


// c. objectData에 담긴 세 개의 난수 중 중앙값에 해당하는 값을 출력하시오.
