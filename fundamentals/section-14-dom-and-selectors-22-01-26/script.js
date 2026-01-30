function changeText() {
  const tagP = document.getElementsByTagName("p");
  tagP[1].innerText =
    "Here from 2 years, i see my carrer more powerful and developed than today, with more abilities and expieriences";
}

changeText();

function changeColorYellow(){
    const color = document.getElementsByTagName("main")
    color[0].style.backgroundColor = "rgb(76, 164, 109)"
}

changeColorYellow()

function changeColorRed(){
    const color = document.getElementsByClassName("center-content")
    color[0].style.backgroundColor = "white"
}


changeColorRed()

function changeTitle(){
    const color = document.getElementsByClassName("title")
    color[0].innerText = "A new way..."
}


changeTitle()

function UpperCase() {
    const upper = document.getElementsByTagName("p")
    upper[0].innerText = upper[0].innerText.toLocaleUpperCase()
}

UpperCase()

function ShowTags() {
    const tags = document.getElementsByTagName("p");
    let newContent = "";
    for (let index = 0; index < tags.length; index += 1){
        newContent += tags[index].innerText
    }
    return newContent;
}

tags = ShowTags()

function showTagsFooter(){
    const show = document.getElementById("footer")
    show.innerText = tags       
}

showTagsFooter()
