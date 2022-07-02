let nome = document.getElementById('nome')
let phone = document.getElementById('phone')
let email = document.getElementById('email')
let info = document.getElementById('info')
let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    if (!nome.value || !phone.value || !email.value) {
        info.innerHTML = 'Preencha todos os campos!'
        removerMessage(info)
    } else if (validationEmail(email.value) === true) {
        SubmitEvent('submit')
    }

    e.preventDefault()
})

email.addEventListener("keyup", (e) => {
    if (validationEmail(email.value) !== true) {
        info.innerHTML = 'example@example.com'
        removerMessage(info)
    }
})

function validationEmail(email) {
    let emailPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    return emailPattern.test(email)
};

function removerMessage() {
    setTimeout(function () {
        document.getElementById('info').innerHTML = "";
    }, 5000);
}