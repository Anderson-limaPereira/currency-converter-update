
const button = document.querySelector("button")
const select = document.querySelector(".valor-select")

const convertervalor = async () => {

  const valorinputvalue = document.querySelector(".valor-input").value

  const valorDaMoedaConverter = document.querySelector(".valor-da-moeda-converter")
  const valorDaMoedaConvertido = document.querySelector(".valor-da-moeda-convertido")

  const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL").then(res => res.json())
  
  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const libra = data.GBPBRL.high
  const bitcoin = data.BTCBRL.high
   


  if (select.value == "dolar") {
    valorDaMoedaConvertido.innerHTML = new Intl.NumberFormat("en-US", {

      style: "currency",
      currency: "USD"

    }).format(valorinputvalue / dolar)

  }

  if (select.value == "euro") {
    valorDaMoedaConvertido.innerHTML = new Intl.NumberFormat("de-DE", {

      style: "currency",
      currency: "EUR"

    }).format(valorinputvalue / euro)

  }
  
  if (select.value == "libra") {
    valorDaMoedaConvertido.innerHTML = new Intl.NumberFormat("en-GB", {

      style: "currency",
      currency: "GBP"

    }).format(valorinputvalue / libra)

  }

  if (select.value == "bitcoin") {
    valorDaMoedaConvertido.innerHTML = new Intl.NumberFormat("BIT", {

      style: "currency",
      currency: "BTC"

    }).format(valorinputvalue / bitcoin)

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





