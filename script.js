


const btnTabla = document.getElementById("btnTabla");



const mostrarTabla = () => {
    const numero = document.getElementById("numero").value;

    const mostrarTabla = document.getElementById("mostrarTabla");

    for (i = 1; i <= 12; i++) {
        const li = document.createElement("li");
        const multiplicar = i * numero;

        // console.log(multiplicar)

        mostrarTabla.appendChild(li);
        li.innerHTML = `${numero} x ${i} = ${multiplicar}`
    }
}

btnTabla.addEventListener("click", mostrarTabla)


const btnMes = document.getElementById("btnMes");

const mostrarMes = () => {

    const inputMes = parseInt(document.getElementById("inputMes").value);
    const mostrarMes = document.getElementById("mostrarMes");

    let mes = ""

    if (inputMes < 1 || inputMes > 12 || isNaN(inputMes)) {
        alert("Inserte un número del 1 al 12");
        return;
    }

    switch (inputMes) {
        case 1:
            mes = "Enero";
            break;
        case 2:
            mes = "Febrero";
            break;
        case 3:
            mes = "Marzo";
            break;
        case 4:
            mes = "Abril";
            break;
        case 5:
            mes = "Mayo";
            break;
        case 6:
            mes = "Junio";
            break;
        case 7:
            mes = "Julio";
            break;
        case 8:
            mes = "Agosto";
            break;
        case 9:
            mes = "Septiembre";
            break;
        case 10:
            mes = "Octubre";
            break;
        case 11:
            mes = "Noviembre";
            break;
        case 12:
            mes = "Diciembre";
            break;
        default:
            mes = "Mes Invalido"
            break;

    }

    mostrarMes.innerText = mes;


}

btnMes.addEventListener("click", mostrarMes)
