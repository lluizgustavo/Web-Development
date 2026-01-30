const header1 = document.createElement("h1")
header1.innerText = "TrybeTrip - Agência de Viagens"
document.body.appendChild(header1)

const main1 = document.createElement("main")
main1.className = "main-content"
document.body.appendChild(main1)

const centerContent = document.createElement("section")
centerContent.className = "center-content"

main1.appendChild(centerContent)

const textP = document.createElement("p")
textP.innerText = "Oficial site to see your travel's plans."
centerContent.appendChild(textP)

const lefContent = document.createElement("section")
lefContent.className = "left-content"
main1.appendChild(lefContent)

const rightContent = document.createElement("section")
rightContent.className = "right-content"
main1.appendChild(rightContent)

const image = document.createElement("img")
image.className = "small-image"
image.src = "https://picsum.photos/200"
centerContent.appendChild(image)

const extendNum = [
    "one", 
    "two", 
    "three", 
    "four", 
    "five", 
    "six", 
    "seven", 
    "eight", 
    "nine", 
    "ten"
]

const ul = document.createElement("ul")

for (let index = 0; index <= extendNum.length - 1; index += 1) {
    let element = document.createElement("li")
    element.innerText = extendNum[index]
    ul.appendChild(element)
    centerContent.appendChild(ul)
}

for (let index = 0; index < 3; index += 1) {
    let element = document.createElement("h3")
    element.innerText = index
    element.className = "description"
    main1.appendChild(element)
}

const title = document.querySelector("h1")
title.className = "title"

main1.removeChild(lefContent)

const colorRightContent = document.getElementsByClassName("right-content")[0]
colorRightContent.style.marginRight = "auto"

for (let index = 0; index < ul.length; index += 1) {
    let element = ul[index]
    if (element === "nine" || element === "ten") {
        ul.removeChild(element)
    }
}

const colorSection = document.getElementsByClassName("center-content")[0]
colorSection.style.backgroundColor = "green"

ul.lastChild.removeChild();
ul.lastChild.removeChild();