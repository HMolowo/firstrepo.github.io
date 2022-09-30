var numSquare = 6
var colors = generateRandomColor(numSquare)
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor()
var colorHead = document.getElementById("colourHead")
colorHead.textContent = pickedColor
var messageDisplay = document.querySelector('#message')
var h1 = document.querySelector("h1")
var resetButton = document.getElementById("reset")
// var easyBtn = document.querySelector("#easymode")
// var hardBtn = document.querySelector("#hardmode")
var modeBtn = document.querySelectorAll(".mode")

for(var i = 0; i < modeBtn.length; i++){
    modeBtn[i].addEventListener("click", function(){
        modeBtn[0].classList.remove("selected")
        modeBtn[1].classList.remove("selected")
        this.classList.add("selected")
        this.textContent === "Easy" ? numSquare = 3 : numSquare = 6
        // if(this.textContent === "Easy"){
        //     numSquare = 3
        // } else{ numSquare = 6 }
        reset();
})
}
function reset(){
    colors = generateRandomColor(numSquare);
    // pick a new random colour and also make it the display color
    pickedColor = pickColor();
    colorHead.textContent = pickedColor;
    // display the color
    for( var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i] 
        } else{
            squares[i].style.background = "none"
        }
       
    }
    h1.style.background = "steelblue"
    resetButton.textContent = "New colors"
    messageDisplay.textContent = ""
}

// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected")
//     hardBtn.classList.remove("selected")
//     numSquare = 3
//     colors = generateRandomColor(numSquare)
//     pickedColor = pickColor();
//     colorHead.textContent = pickedColor
//     for( var i = 0; i < squares.length; i++){
//         if (colors[i]) {
//             squares[i].style.background = colors[i]
//         } else{
//             squares[i].style.display = "none"
//         }       
//     }
// })
// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected")
//     easyBtn.classList.remove("selected")
//     numSquare = 6
//     colors = generateRandomColor(numSquare)
//     pickedColor = pickColor();
//     colorHead.textContent = pickedColor
//     for( var i = 0; i < squares.length; i++){
//         squares[i].style.background = colors[i]
//         squares[i].style.display = "block"
//     }
// })

resetButton.addEventListener("click", function(){
    reset()
    // colors = generateRandomColor(numSquare);
    // // pick a new random colour and also make it the display color
    // pickedColor = pickColor();
    // colorHead.textContent = pickedColor;
    // // display the color
    // for( var i = 0; i < squares.length; i++){
    //     squares[i].style.background = colors[i]
    // }
    // h1.style.background = "steelblue"
    // this.textContent = "New colors"
    // messageDisplay.textContent = ""
})
for( var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i]

    squares[i].addEventListener("click", function(){
        var clickedSquare = this.style.background;
        if (clickedSquare === pickedColor) {
            messageDisplay.textContent = "Correct"
            changeColor(clickedSquare)
            resetButton.textContent = "Play Again"
            h1.style.background = clickedSquare

        }else{
            this.style.background = "black"
            messageDisplay.textContent = "Try Again"
        }
    }
    )
}
function changeColor(color) {
    // loop through the squares and make them the same color
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = color
    }
}
function pickColor(){
   var random = Math.floor(Math.random() * colors.length )
   return colors[random]
}
function generateRandomColor(num){
    var arr = [] 
    // an array to generate random colors
    for (var i = 0; i < num; i++){
        // get random colors to push into array
        arr.push(randomColor())
    }
    return arr
}
function randomColor(){
    // a function to generate random numbers for the rgb
   var r= Math.floor(Math.random() * 256)
   var g= Math.floor(Math.random() * 256)
   var b= Math.floor(Math.random() * 256)
   return  "rgb(" + r + ", " + g +", " + b + ")"

}
