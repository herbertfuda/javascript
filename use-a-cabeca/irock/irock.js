function msg(){
    alert('Olá, bem vindo ao site da pedra tosca!')
}
function touchrock(){
    var nomeUsuario = prompt('Qual o seu nome?')
    if(nomeUsuario){
        alert(`Olá ${nomeUsuario}, você clicou mesmo em uma pedra? Você consegue ser mais tosco que a Pedra!!!`)
        document.getElementById("irock").src="rock_happy.png"
    }
    else{
        alert('Você cancelou, parabens!')
    }
}
