const botaosortear = document.querySelector('div.box button')
var nsorte = document.querySelector('div.box h1')
var roleta = []

for(i = 0; i <= 24; i++){
    roleta.push(i)
}

botaosortear.addEventListener('click', () => {
    nsorte.innerHTML = 'A chave é ' + roleta[Math.floor(Math.random() * roleta.length)]
})
