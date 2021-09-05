let myImg = document.querySelector('img')
let myImg2 = document.getElementById('img123')
//alert("my image " + myImg)

//alert("my source " + mysrc)
myImg2.onclick = function(){
    let mysrc = myImg2.getAttribute("src")
    if(mysrc === "/Users/sowndaryashanmugam/Desktop/Screen Shot 2021-06-10 at 9.23.13 PM.png"){
        myImg2.setAttribute('src' , "1.jpeg")
        }
    else{
        myImg2.setAttribute('src' , "/Users/sowndaryashanmugam/Desktop/Screen Shot 2021-06-10 at 9.23.13 PM.png")
    }
}