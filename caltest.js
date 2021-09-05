let mySubj1 = document.getElementById('sub1');
let mySubj2 = document.getElementById('sub2');
let mySubj3 = document.getElementById('sub3');
let myButton = document.getElementById('cal');
let sum;
let cgpa = document.getElementById('cgpa');
let name1 = document.getElementById('name');
let studentId = document.getElementById('sid');
let deptName = document.getElementById('dept');
let enteredName = document.getElementById('enteredName'); 
let enteredID = document.getElementById('sid1'); 
let selectedDept = document.getElementById('selectedDept')



//let student = new Object();

myButton.onclick = function(){
    sum = parseInt(mySubj1.value )+ parseInt(mySubj2.value) + parseInt(mySubj3.value);
    console.log('sum : ' + sum)
    cgpa.textContent = sum;
    console.log(name1.value);
    console.log(deptName.value);
    enteredName.textContent = name1.value;
    enteredID.textContent = studentId.value;
    selectedDept.textContent= deptName.value;
    //student.name = name1.value;
    //student.studentId = studentId.value;
    //student.departNme = deptName.value;
    //student.total = sum;
  console.log(student)
}


