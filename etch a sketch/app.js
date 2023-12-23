let colorMode = 1; // default is multicolor
let storedColor = "black"

// Generate random color for multicolor mode
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// Slider
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  
  output.innerHTML = slider.value;

  // default, canvas size is 30 using multicolor mode
let size = Number(slider.value)

document.querySelector(".container").style.gridTemplateColumns = `repeat(${size}, 1fr)`
document.querySelector(".multicolor").style.backgroundColor = "grey"

for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
        let node = document.createElement("div");
        node.addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = getRandomColor()
        })
        document.querySelector(".container").appendChild(node);     
    }
}

// Slider on input

slider.addEventListener('input', function() {
    output.innerHTML = this.value;
    size = Number(slider.value)
    const container = document.querySelector(".container")
    document.querySelector(".canvas").removeChild(container);  
    let newContainer = document.createElement("div");
    newContainer.className = "container"
    document.querySelector(".canvas").appendChild(newContainer); 
    document.querySelector(".container").style.gridTemplateColumns = `repeat(${size}, 1fr)`
    if (colorMode === 1){
        for (let i = 0; i < size; i++){
            for (let j = 0; j < size; j++){
                let node = document.createElement("div");
                node.addEventListener("mouseover", function(event){
                    event.target.style.backgroundColor = getRandomColor()
                })
                document.querySelector(".container").appendChild(node);     
            }
        }
    } else {
        for (let i = 0; i < size; i++){
            for (let j = 0; j < size; j++){
                let node = document.createElement("div");
                node.addEventListener("mouseover", function(event){
                    event.target.style.backgroundColor = storedColor;
                })
                document.querySelector(".container").appendChild(node);     
            }
        }
    }
    
  }, false)

  // Eraser

  let onoffErase = 0;

  function erase() {
    if (onoffErase === 0){
        onoffErase = 1;
        document.querySelector(".erase").style.backgroundColor = "grey"
        document.querySelector(".container").addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = "white";
        })
    } else {
        onoffErase = 0;
        document.querySelector(".erase").style.backgroundColor = "white"
        if (colorMode === 0){
            document.querySelector(".container").addEventListener("mouseover", function(event){
                event.target.style.backgroundColor = storedColor;
            })   
        } else {
            document.querySelector(".container").addEventListener("mouseover", function(event){
                event.target.style.backgroundColor = getRandomColor();
            })
        }
    }
}

// Unicolor mode

document.querySelector("#colorPicker").addEventListener("input", uniColor, false);


function uniColor(e) {
    colorMode = 0
    storedColor = e.target.value

    document.querySelector(".multicolor").style.backgroundColor = "white"
    document.querySelector("#colorPicker").style.backgroundColor = "grey";
    
    document.querySelector(".container").addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = e.target.value
    })
     
}

// Multicolor mode

function multiColor() {
    colorMode = 1
    document.querySelector(".multicolor").style.backgroundColor = "grey"
    document.querySelector("#colorPicker").style.backgroundColor = "white";
    document.querySelector(".container").addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = getRandomColor()
    })        
}

// Clear canvas
function clearance() {
    document.querySelector(".container").childNodes.forEach(pixel => pixel.style.backgroundColor = "white")
}
