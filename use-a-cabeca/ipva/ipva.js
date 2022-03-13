function calcular(){
    const MOTO = 0.02
    const CARRO = 0.04
    const CAMINHAO = 0.06
    var estado = document.getElementById('estado').value
    var veiculo = document.getElementById('veiculo').value
    var preco = parseFloat(document.getElementById('preco').value)
    var impDevido = 0
    if(estado == 'sp'){
        if(veiculo == 'moto'){
            impDevido = preco * MOTO
        }
        else if(veiculo == 'carro'){
            impDevido = preco * CARRO
        }
        else {
            impDevido = preco * CAMINHAO
        }
    }
    else{
        alert(`Ainda não temos tabela para o IPVA do estado de ${estado}`)
    }
    if(isNaN(impDevido)){
        alert("Você deve digitar o valor do veículo")
    }
    else{
        document.getElementById('ipva').innerHTML = impDevido.toFixed(2)
    }
}