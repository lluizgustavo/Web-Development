const form = document.querySelector("#main-form")
const imageCheckbox = document.querySelector("#agreement")
const fullName = document.querySelector("#fullName")
const email = document.querySelector("#e-mail")
const textArea = document.querySelector("#question")


form.addEventListener("submit", (event) => {
    if (fullName.value.length > 40) {
        fullNameValue = fullName.value.length
        event.preventDefault()
        alert(`Por favor, preencha o campo |NOME| com no máximo 40 caracteres. Atualmente possui ${fullNameValue} caracteres.`)
    }
    if (email.value.length > 50) {
        emailValue = email.value.length
        event.preventDefault()
        alert(`Por favor, preencha o campo |E-MAIL| com no máximo 50 caracteres. Atualmente possui ${emailValue} caracteres.`)

    }
    if (textArea.value.length > 500) {
        textAreaValue = textArea.value.length
        event.preventDefault()
        alert(`Por favor, preencha o campo |TEXT AREA| com no máximo 500 caracteres. Atualmente possui ${textAreaValue} caracteres.`)
    }
    if (!imageCheckbox.checked) {
        event.preventDefault()
        alert("Por favor, habilite o campo das fotos para podermos enviar suas informações.");

    }


})