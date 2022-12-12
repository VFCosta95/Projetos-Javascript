let senhaelemento = document.querySelector('div.gerador-senha p')
const btnGerarSenha = document.querySelector('div.gerador-senha button')
const caracteres =['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let senha = '', intervalo

const gerarSenha = () =>{

    for(let i = 1; i  <= 64; i++){
        senha += caracteres[Math.floor(Math.random() * caracteres.length)]
    }
    
    senhaelemento.textContent = senha

    senha = ''
}

const efeitoGerarSenha = (btn, Loop, tempo) => {
    intervalo = setInterval(() => {
        gerarSenha()
    }, Loop)

    setTimeout(() => {
        clearInterval(intervalo)
    }, Loop * tempo);
}

btnGerarSenha.onclick = ()=>{
    btnGerarSenha.setAttribute("disabled", "true")
    efeitoGerarSenha(btnGerarSenha, 12, 50)
}

senhaelemento.onclick = ()=>{
    navigator.clipboard.writeText(senhaelemento.textContent)
    senhaelemento.classList.add('copiada')

    setTimeout(() => {
        senhaelemento.classList.remove("copiado")
    }, 2000);
}
