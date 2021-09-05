let currentDate = document.getElementById('currentDate');
let curDate = new Date()
console.log(curDate.toDateString());
currentDate.textContent = curDate.toDateString();


let shotDate = document.getElementById('shotDate');
let shot1Date= document.getElementById('shot1Date');

let secondShotDate = new Date();

shotDate.onchange = function(){
    console.log('date changed ' + shotDate.value);
    shot1Date.textContent = shotDate.value;

    // //calculating 90 days from selected date
    // let firstShotDate = new Date(shotDate.value);
    // console.log(firstShotDate.getDate() + 90);
    // secondShotDate  = secondShotDate.setDate(firstShotDate.getDate() + 90);
    // console.log(secondShotDate.toDateString())

}


let myClick = document.getElementById('show');
console.log(myClick);
let secondShotDetails = document.getElementById('details');

    

myClick.onclick = function()
{
    secondShotDetails.textContent = shotDate.value + ' + 90 days';
}