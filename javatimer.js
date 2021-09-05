let myForm = document.forms.myForm;
let myMessage = document.getElementById('message');

myForm.onsubmit = function(){
    console.log("submit was clicked", myForm.name.value);

    if(myForm.name.value == "")
    {
        myMessage.innerHTML = "please enter";
        return false;
    }else{
        myMessage.innerHTML = myForm.name.value;
        return true;
    }
};






// setting timer
//let message = document.getElementById('box');
 //function showMessage(){
   //  message.className = "show";
 //}
 //setTimeout(showMessage , 2000);