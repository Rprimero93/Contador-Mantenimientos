const numeroFinal = 872;
const elementoContador = document.getElementById('contador');
const mensajeFinal = document.getElementById('mensajeFinal');
const duracionTotal = 6000; // 6 segundos en milisegundos
const umbralDesaceleracion = 0.8; // 80% del tiempo para la parte rápida

let numeroInicial = 0;

function iniciarContador() {
  const tiempoInicio = Date.now();
  
  function actualizarContador() {
    const tiempoTranscurrido = Date.now() - tiempoInicio;
    const progreso = Math.min(tiempoTranscurrido / duracionTotal, 1);
    
    if (progreso < umbralDesaceleracion) {
      // Parte rápida (primeros 80% del tiempo)
      const progresoRapido = progreso / umbralDesaceleracion;
      numeroInicial = Math.floor(progresoRapido * (numeroFinal * 0.9));
    } else {
      // Parte lenta (últimos 20% del tiempo)
      const progresoLento = (progreso - umbralDesaceleracion) / (1 - umbralDesaceleracion);
      numeroInicial = Math.floor(numeroFinal * 0.9 + progresoLento * (numeroFinal * 0.1));
    }
    
    elementoContador.textContent = numeroInicial;
    
    if (progreso < 1) {
      requestAnimationFrame(actualizarContador);
    } else {
      elementoContador.textContent = numeroFinal;
      mensajeFinal.style.display = 'block';
    }
  }
  
  actualizarContador();
}

window.onload = iniciarContador;