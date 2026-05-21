const mouseIn = (event) => {
    event.currentTarget.style.width = "55px"
}

const mouseOff = (event) => {
    event.currentTarget.style.width = "50px"
}

const card = document.querySelectorAll(".socials")

for (let index = 0; index < card.length; index +=1) {
    card[index].addEventListener("mouseover", mouseIn)
}

for (let index = 0; index < card.length; index +=1) {
    card[index].addEventListener("mouseleave", mouseOff)
}