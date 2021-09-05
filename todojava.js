let insertText = document.getElementById('addtodo');
let buttClick = document.getElementById('but');
console.log(buttClick)

// let todoDeleteButton = document.getElementBy('123');
// console.log(todoDeleteButton)

// if(todoDeleteButton) {
//     todoDeleteButton.onclick = function(){
//         console.log('delete clicked');
//     }
// }





buttClick.onclick = () =>{
    console.log('clicked')
    let listElement = document.getElementById('uList');
    let newList = document.createElement('li');
    listElement.appendChild(newList);
    console.log(insertText.value);
    newList.innerHTML = '<h2>' + insertText.value + '</h2><button id="123" value="buttton"> delete </button>';  
   
}