let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela (tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute ==  numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mesnsagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa} ! `;
        exibirTextoNaTela('p',mesnsagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto e menor');
        }else {
            exibirTextoNaTela('p','O número secreto e maior');
        }
        tentativas ++;
        limparCampo();

    }
}

function gerarNumeroAleatorio() {
     let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }


    if ( listaDeNumerosSorteados.includes(numeroEscolhido)){//includes ver se o dados esta na lista
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);//push adiciona ao final da lista o dado
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reinicarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}