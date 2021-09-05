let firstArray = [1,2,3];
let secondArray = [4,5,6]

let finalArray = [];

for(let i=0; i<firstArray.length; i++){
    finalArray[i] = firstArray[i];
}

for(let i=0, j=finalArray.length; i<secondArray.length; i++, j++){
    finalArray[j] = secondArray[i];
}

console.log(finalArray)

//spread
 let final2 =[...firstArray,'sow', ...secondArray];
 console.log(final2);

 const personalInfo = {
     name:'sow',
     age:29,
     city:'san Jose'
 };
 let professionalInfo = {
     education:'mca',
     college:{
         ug:'psg',
         pg:'cit'
     },
     company:'looking for a job',
     previousCompanies: ['tcs','cts']
 };
 let profile ={
     ...personalInfo,
     ...professionalInfo
    };
    console.log(profile);

let manualProfile = {
    name : personalInfo.name,
    age : personalInfo.age,
    education: professionalInfo.education,
    pg: professionalInfo.college.pg 
}    

console.log(manualProfile)

