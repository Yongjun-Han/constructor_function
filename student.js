const studentList = ["강예훈","김성현","류주완","마근원","박종인","박재형","송형주","양상희","원두진","유민호","이상호","이소영","이은수","정동욱","정윤환","정정원","지영빈","한용준","황초영","김근수","김승현","전형민","정연주","이아연","최화연"
];

function student (number, name) {
  this.id=number;
  this.name=name;
}

const studentArray = [];

for(let i=0; i<studentList.length; i++) {
  studentArray.push(new student(i+1,studentList[i]))
}

console.log(studentArray);

