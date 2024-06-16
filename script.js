const button = document.querySelector("button")
const select = document.querySelector(".valor-select")

function convertervalor() {

  const valorinputvalue = document.querySelector(".valor-input").value

  const valorDaMoedaConverter = document.querySelector(".valor-da-moeda-converter")
  const valorDaMoedaConvertido = document.querySelector(".valor-da-moeda-convertido")



  const dolartoday = 5.2
  const eurotoday = 6.2
  
  const libratoday = 6.7
  const bitcointoday = 367.582
 

  if (select.value == "dolar") {
    valorDaMoedaConvertido.innerHTML = new Intl.NumberFormat("en-US", {

      style: "currency",
      currency: "USD"

    }).format(valorinputvalue / dolartoday)

  }

  if (select.value == "euro") {
    valorDaMoedaConvertido.innerHTML = new Intl.NumberFormat("de-DE", {

      style: "currency",
      currency: "EUR"

    }).format(valorinputvalue / eurotoday)

  }
  
  if (select.value == "libra") {
    valorDaMoedaConvertido.innerHTML = new Intl.NumberFormat("en-GB", {

      style: "currency",
      currency: "GBP"

    }).format(valorinputvalue / libratoday)

  }

  if (select.value == "bitcoin") {
    valorDaMoedaConvertido.innerHTML = new Intl.NumberFormat("BIT", {

      style: "currency",
      currency: "BTC"

    }).format(valorinputvalue / bitcointoday)

  }
    

  valorDaMoedaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {

    style: "currency",
    currency: "BRL"

  }).format(valorinputvalue)

}
  function changecurrency() {
    const valorNome = document.getElementById("valor-nome")
    const valorImg = document.querySelector(".valor-img")



    if (select.value == "dolar") {

      valorNome.innerHTML = "Dólar Americano"
      valorImg.src = "./img/usa.png"
    }

    if (select.value == "euro") {

      valorNome.innerHTML = "euro"
      valorImg.src = "./img/euro.png"
    }
    
    if (select.value == "libra") {

      valorNome.innerHTML = "libra"
      valorImg.src = "./img/libra.png"
    }

    if (select.value == "bitcoin") {

      valorNome.innerHTML = "bitcoin"
      valorImg.src = "./img/bitcoin.png"
    }
     

    
    convertervalor()
    
  }


select.addEventListener("change", changecurrency)
button.addEventListener("click", convertervalor)

