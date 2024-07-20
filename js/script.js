//Seleção de DOM

function calcularIMC() {

    let peso = document.querySelector('#peso');
    let altura = document.querySelector('#altura');
    let resultado = document.querySelector('#resultado');

    let valorPeso = parseFloat(peso.value);
    let valorAltura = parseFloat(altura.value);

    console.log(typeof valorPeso);
    console.log(typeof valorAltura);

    let imc = valorPeso / (valorAltura * valorAltura);
    let classificacao = '';


    if (imc < 18.5) {
        classificacao = 'Magreza';
    }

    else if (imc < 24.9) {
        classificacao = 'Normal';
    }

    else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    }

    else if (imc < 34.9) {
        classificacao = 'Obesidade';
    }

    else {
        classificacao = 'Obesidade Grave';
    }

    resultado.innerHTML = `<h3>Seu IMC é ${imc.toFixed(2)} <br> Sua classificação é: ${classificacao}</h3>`
}

let btn = document.querySelector('#btn');
btn.addEventListener('click', calcularIMC);