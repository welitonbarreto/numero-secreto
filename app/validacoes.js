function verificaSeOChutePossuiUmValorValido(chute){
    numero = +chute;

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Chute Inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML += `<div>Chute deve estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }


    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou<h2>
            <h3>O número secreto é ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente<btn>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>'
    } else{
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>'
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor;
}


document.body.addEventListener("click", e => {
    if (e.target.id === "jogar-novamente") {
        window.location.reload();
    }
})