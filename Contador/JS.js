const numeroFinal = 674;
const elementoContador = document.getElementById('contador');
const mensajeFinal = document.getElementById('mensajeFinal');

let numeroInicial = 0;

const velocidadNormal = 50;
const velocidadLenta = 100;
const umbralDesaceleracion = 10;

function iniciarContador() {
  const intervalo = setInterval(() => {
    numeroInicial++;
    elementoContador.textContent = numeroInicial;

    if (numeroInicial >= numeroFinal - umbralDesaceleracion) {
      clearInterval(intervalo);
      const intervaloLento = setInterval(() => {
        numeroInicial++;
        elementoContador.textContent = numeroInicial;

        if (numeroInicial >= numeroFinal) {
          clearInterval(intervaloLento);
          mensajeFinal.style.display = 'block';
        }
      }, velocidadLenta);
    }
  }, velocidadNormal);
}

window.onload = iniciarContador;