const url = 'https://api.exchangerate-api.com/v4/latest/EUR';
const fetchPromise = fetch(url);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    const valorDelEuro = data.rates.EUR;
    console.log(`Partimos de que el valor del euro es ${valorDelEuro}`);
    const valorDelYen = data.rates.JPY;
    console.log(`El valor actual del Yen es ${valorDelYen} euros `);
    const valorDelDolar = data.rates.USD;
    console.log(`El valor actual del dólar es ${valorDelDolar} euros`);

    let valorIntroducidoPorElUsuarioEnEuros = prompt(
      '¿Introduce la cifra en Euros que quieres convertir a Dólares y a Yenes'
    );
    let convertidoADolares = valorIntroducidoPorElUsuarioEnEuros * valorDelDolar;
    let convertidoAYenes = valorDelDolar * valorDelYen;
    alert(
      `${valorIntroducidoPorElUsuarioEnEuros} euros son ${convertidoADolares} dólares que son a su vez ${convertidoAYenes} yenes`
    );
  });
