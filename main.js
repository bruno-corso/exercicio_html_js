let inputCampoA = document.querySelectorAll('input')[0]
let inputCampoB = document.querySelectorAll('input')[1]
let inputBotao = document.getElementsByTagName('button')[0]
let formulario = document.getElementsByTagName('form')[0]
let msg = document.getElementsByTagName('p')[0]


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let valorA = inputCampoA.value;
    let valorB = inputCampoB.value;
    
    if(valorB > valorA) {
        msg.innerHTML = `Ótimo! O valor de B (${valorB}) é maior que o valor de A (${valorA})`
        msg.classList.add('sucesso')
        msg.classList.remove('falhou')
    }
    else {
        msg.innerHTML = `Tente outra vez! O valor de B (${valorB}) NÃO é maior que o valor de A (${valorA})`
        msg.classList.remove('sucesso')
        msg.classList.add('falhou')
    }
    inputCampoA.value = ''
    inputCampoB.value = ''
})