window.onload = () => {
    const pixels = document.querySelectorAll(".pixel");
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].dataset.index = index;
    }


    const recoveryColors = localStorage.getItem("colorPalette");
    const getColors = document.querySelectorAll(".color")
    if (recoveryColors){
        const colors = JSON.parse(recoveryColors)
        for(let index = 0; index < getColors.length;index+=1) {
            getColors[index].style.backgroundColor = colors[index]
        }
    }

    const getPixels = localStorage.getItem("pixelBoard")
    if (getPixels){
        const board = JSON.parse(getPixels)
        for (let index = 0; index < board.length; index +=1) {
            pixels[index].style.backgroundColor = board[index] || "white"
        }
    }
}

const saveBoard = () => {
    const pixels = document.querySelectorAll(".pixel")
    let board = [];
    for (let pixel of pixels) {
        board.push(pixel.style.backgroundColor || "white")
    }
    localStorage.setItem("pixelBoard", JSON.stringify(board))

}


const insertColorOnLocalstorage = (colors) => {
    const colorsSaved = []
    colors.forEach((index) => {
        colorsSaved.push(index.style.backgroundColor)
    })
    localStorage.setItem("colorPalette", JSON.stringify(colorsSaved))
}


const randomColor = () => {
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    
    return `rgb(${color1}, ${color2}, ${color3})`;
};


const changeColors = () => {
    const getColors = document.querySelectorAll(".color")
    const color1 = randomColor();
    const color2 = randomColor();
    const color3 = randomColor();

    if (color2 === color1){
        color2 = randomColor()
    }

    if (color3 === color2){
        color1 = randomColor()
    }

    if (color3 === color1){
        color2 = randomColor()
    }

    getColors[1].style.backgroundColor = color1
    getColors[2].style.backgroundColor = color2
    getColors[3].style.backgroundColor = color3
    insertColorOnLocalstorage(getColors)


}


const pixelsColor = document.querySelectorAll(".pixel");
    for(let index = 0; index < pixelsColor.length; index +=1) {
        pixelsColor[index].style.backgroundColor = "white"
    };


const clearColorSelected = (event) => {
    const colors = document.querySelectorAll(".color")
    for (let color of colors) {
        color.classList.remove("selected")
    }
    const currentColor = event.currentTarget
    currentColor.classList.add("selected")
}


const putColor = (event) => {
                        
    const colorSelected = document.querySelector(".selected")
    if (colorSelected === null){
        return
    }
    event.currentTarget.style.backgroundColor = colorSelected.style.backgroundColor

    if (!colorSelected) return
    
    const color = window.getComputedStyle(colorSelected).backgroundColor
    event.currentTarget.style.backgroundColor = color

    saveBoard();

}


const clearPixels = () => {
    const pixels = document.querySelectorAll(".pixel")
    for (let pixel of pixels){
        pixel.style.backgroundColor = "white"
    }
    saveBoard();
}



const buttonRandomColor = document.getElementById("button-random-color")
buttonRandomColor.addEventListener("click", changeColors)

const clearBoard = document.getElementById("clear-board")
clearBoard.addEventListener("click", clearPixels)

const selectColor = document.querySelectorAll(".color")
for (let color of selectColor) {
    color.addEventListener("click", clearColorSelected)
}

const fillPixel = document.querySelectorAll(".pixel")
for (let pixel of fillPixel) {
    pixel.addEventListener("click", putColor)
}