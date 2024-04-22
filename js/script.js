const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  let valor = document.getElementById("valor").value.trim();
  let porcentagem = document.getElementById("porcentagem").value.trim();
  let container_resultado = document.getElementById("container_resultado");

  if (String(valor).length != 0 && String(porcentagem).length != 0) {
    valor = String(valor).replace(",", ".");
    porcentagem = String(porcentagem).replace(",", ".");
    if (!isNaN(valor) && !isNaN(porcentagem)) {
      if (valor > 0 && porcentagem > 0) {
        let valorPorcentagem = (porcentagem / 100) * valor;
        let valorDesconto = valor - valorPorcentagem;
        let valorJuros = Number(valor) + Number(valorPorcentagem);

        valor = Number(valor).toFixed(2).replace(".", ",");
        porcentagem = Number(porcentagem).toFixed(2).replace(".", ",");
        valorDesconto = Number(valorDesconto).toFixed(2).replace(".", ",");
        valorJuros = Number(valorJuros).toFixed(2).replace(".", ",");

        console.log(
          `R$ ${valor} com ${porcentagem}% de desconto é R$ ${valorDesconto}`
        );

        console.log(
          `R$ ${valor} com ${porcentagem}% de juros é R$ ${valorJuros}`
        );

        container_resultado.className = "container_resultado_sucesso";

        container_resultado.innerHTML = `<p>R$ ${valor} com ${porcentagem}% de desconto é R$ ${valorDesconto}</p>
        <p>R$ ${valor} com ${porcentagem}% de juros é R$ ${valorJuros}</p>`;
      } else {
        console.log("O valor e a porcentagem devem ser maior que zero.");
        container_resultado.className = "container_resultado_erro";
        container_resultado.innerHTML =
          "<p>O valor e a porcentagem devem ser maior que zero.</p>";
      }
    } else {
      console.log("O valor e a porcentagem devem ser numéricos.");
      container_resultado.className = "container_resultado_erro";
      container_resultado.innerHTML =
        "<p>O valor e a porcentagem devem ser numéricos.</p>";
    }
  } else {
    console.log("Informe o valor e a porcentagem.");
    container_resultado.className = "container_resultado_erro";
    container_resultado.innerHTML = "<p>Informe o valor e a porcentagem.</p>";
  }
});
