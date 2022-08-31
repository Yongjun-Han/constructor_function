// console.log("testnode");
// const pokemon = ["피카츄","라이츄","파이리","꼬부기"]

// export default function kdt (name, glasses, payment) {
//   this.id = name;
//   this.b = glasses;
//   this.c = payment;
// }

// const members = [];
// //배열초기화

// for(let i=0; i<pokemon.length; i++) {
//   members.push(new kdt(i+1, "", "bye"));
// }
// console.log(members);
// // const = new kdt("슈크림", "김치", "소주");
// // console.log(typeof ahyeon);

function Me (name,age,address,tel) {
  this.name = name;
  this.age = age;
  this.region = address;
  this.cellnumber = tel;
}

const myInfo = new Me("한용준", 27,"대전","01098227533");
console.log(myInfo);
// const myInfo = [];

// for (let i=0; i<4; i++) {
//   myInfo.push(new me("한용준", 27,"대전","01098227533"))
// }

// console.log(myInfo);