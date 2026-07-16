const email = document.querySelector("#e-mail")
const password = document.querySelector("#password")
const trybewartsLogin = document.querySelector("#trybewarts-login")
const submitBtn = document.querySelector("#submit-btn")
const agreement = document.querySelector("#agreement")

trybewartsLogin.addEventListener("submit", (event) => {

    if (email.value.trim() !== "tryber@teste.com") {
        event.preventDefault()
        alert("E-mail ou senha inválidos.");
        return
    }

    if (password.value.trim() !== "123456") {
        event.preventDefault()
        alert(`E-mail ou senha inválidos.`)
        return
    }

    alert("Olá, tryber!")

})

if (agreement) {
    agreement.addEventListener('change', (event) => {
        submitBtn.disabled = !event.target.checked;
    });
}