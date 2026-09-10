let visor = document.getElementById("visor");

const adicionarNoVisor = (value) => {
    visor.value += value;
}

function calcular() {
    try {
        visor.value = eval(visor.value);
    } catch (error) {
        visor.value = "Error";
    }
}

const limparVisor = () => {
    visor.value = "";
}