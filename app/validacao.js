function verificaChute(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += "<div> Valor Invalido </div>";
    return;
  }

  if (numeroLimite(numero)) {
    elementoChute.innerHTML += `
    <div> Número fora do limite: ${menorValor} e ${maiorValor} </div>
      `;
    return;
  }

  // vaidacao para quando o usuario acertar o numero
  // body redesenha a tela apagando o conteudo anterior
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2> Você Acertou ! </h2>
    <h3> O número secreto era ${numeroSecreto}</h3>
    <button id="jogar-denovo" class="btn-jogar">Jogar Novamente</button>
  `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>Tente um número menor <i class="fa-solid fa-circle-down" style="color: #FF6D60;"></i></div>
    `;
  } else {
    elementoChute.innerHTML += `
    <div>Tente um número maior <i class="fa-solid fa-circle-up" style="color: #FF6D60;"></i></div>`;
  }
}

function numeroLimite(numero) {
  return numero > maiorValor || numero < menorValor;
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-denovo") {
    window.location.reload();
  }
});
