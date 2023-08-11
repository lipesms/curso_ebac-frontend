const form = document.getElementsByTagName('form')[0]
const input1 = document.getElementById('number1')
const input2 = document.getElementById('number2')
const button = document.getElementsByTagName('button')[0]
const p = document.querySelector('form p')

function toggleButton(disable){
    if(disable){
        button.classList.remove('enable')
        button.classList.add('disable')
        button.disabled = true
    }else{
        button.classList.remove('disable')
        button.classList.add('enable')
        button.disabled = false
    }
}

function validarNumeros(){
    let numero1 = Number(input1.value)
    let numero2 = Number(input2.value)

    if(numero1 >= numero2){
        p.innerHTML = "O segundo numero deve ser maior que o primeiro"
        p.style.visibility = 'visible'
        toggleButton(true)
    }else{
        p.style.visibility = 'hidden'
        toggleButton(false)
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    p.innerHTML = "Valores enviados com sucesso!"
    p.style.color = 'green'
    p.style.visibility = 'visible'
    input1.value = ''
    input2.value = ''
})

input1.addEventListener('keyup', () => {
    validarNumeros()
})

input2.addEventListener('keyup', () => {
    validarNumeros()
    
})