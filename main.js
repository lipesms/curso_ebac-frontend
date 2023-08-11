const form = document.getElementsByTagName('form')[0]
const numeros = document.getElementsByClassName("inputs")
const input1 = document.getElementById('number1')
const input2 = document.getElementById('number2')
const button = document.getElementsByTagName('button')[0]
const p = document.querySelector('form p')

let botaoValido = [false, false]

function ativarBotao(){
    if(botaoValido[0] == true && botaoValido[1] == true){
        button.classList.remove('disable')
        button.classList.add('enable')
    } else{
        button.classList.remove('enable')
        button.classList.add('disable')

    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    p.innerHTML = "Valores enviados com sucesso!"
    p.style.color = 'green'
    p.style.visibility = 'visible'
    input1.innerHTML = ''
    input2.innerHTML = ''

})

numeros[1].addEventListener('keyup', (e) => {
    let numero1 = numeros[0].value
    let numero2 = Number(e.target.value)

    if(numero1 > numero2){
        p.innerHTML = "O segundo numero deve ser maior que o primeiro"
        p.style.visibility = 'visible'
        button.disabled = 'true'
        button.classList.add('disable')
        enableButton[1] = false
    }else{
        p.style.visibility = 'hidden'
        botaoValido[1] = true
    }
    ativarBotao()
})

numeros[0].addEventListener('keyup', (e) => {
    if(e.target.value != '')
        botaoValido[0] = true
    else
        botaoValido[0] = false
    ativarBotao()
})