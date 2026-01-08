
  const botoes = document.querySelectorAll(".botao");

  botoes.forEach((botao, index) => {
    // restaura estado salvo
    const corSalva = localStorage.getItem("botao_" + index);
    if (corSalva) {
      botao.style.backgroundColor = corSalva;
    }

    botao.addEventListener("click", () => {
      const corAtual = botao.style.backgroundColor;
      const novaCor = botao.dataset.cor;

      if (corAtual === novaCor) {
        botao.style.backgroundColor = "gray";
        localStorage.removeItem("botao_" + index);
      } else {
        botao.style.backgroundColor = novaCor;
        localStorage.setItem("botao_" + index, novaCor);
      }
    });
  });
