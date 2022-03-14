var nomeUsuario
function msg(){
    alert('Olá, bem vindo ao site da pedra tosca!')
}
function resize(){
    document.getElementById("irock").style.height = (document.body.clientHeight - 100) * 0.9
}
function touchrock(){
    if(nomeUsuario){
        alert(`Eu gosto de atenção ${nomeUsuario}. Obrigado!`)
        document.getElementById("irock").src="rock_happy.png"
    }
    else{
        nomeUsuario = prompt('Qual o seu nome?')
        alert(`Olá ${nomeUsuario}, você clicou mesmo em uma pedra? Você consegue ser mais tosco que a Pedra!!!`)
        document.getElementById("irock").src="rock_happy.png"
    }
    setTimeout("document.getElementById('irock').src = 'rock.png'", 3000)
}

