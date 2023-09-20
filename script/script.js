// digitos
let horas = document.querySelector("#horas");
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");

// botões
let botaoIniciar = document.querySelector("#btn_iniciar");
let botaoPausar = document.querySelector("#btn_pausar");
let botaoContinuar = document.querySelector("#btn_continuar");
let botaoZerar = document.querySelector("#btn_zerar");

let intervalo;
let hrs = 0;
let min = 0;
let seg = 0;
let pausado = false;

botaoIniciar.addEventListener("click", iniciar);
botaoPausar.addEventListener("click", pausar);
botaoContinuar.addEventListener("click", continuar)
botaoZerar.addEventListener("click", zerar)

function iniciar() {
    intervalo = setInterval( () => {
        if (!pausado) {
            seg += 1;
        
            if ( seg === 60) {
                min++
                seg = 0;
            }

            if ( min === 60) {
                hrs++
                min = 0;
            }

        }

        horas.textContent = hrs < 10 ? "0" + hrs : hrs;
        minutos.textContent = min < 10 ? "0" + min : min;
        segundos.textContent = seg < 10 ? "0" + seg : seg;
    }, 1000);

    botaoIniciar.style.display = "none";
    botaoPausar.style.display = "inline";
    botaoZerar.style.display = "none";
}


function pausar() {
    //clearInterval(intervalo);
    pausado = true;
    botaoPausar.style.display = "none";
    botaoContinuar.style.display = "inline";
    botaoZerar.style.display = "inline";
}

function continuar() {
    pausado = false;
    botaoPausar.style.display = "inline";
    botaoContinuar.style.display = "none";
    botaoZerar.style.display = "none";
}

function zerar() {
    clearInterval(intervalo);
    pausado = false;

    hrs = 0;
    min = 0;
    seg = 0;

    horas.textContent = "00";
    minutos.textContent = "00";
    segundos.textContent = "00";

    botaoIniciar.style.display = "inline";
    botaoPausar.style.display = "none";
    botaoZerar.style.display = "none";
    botaoContinuar.style.display = "none";
    
}