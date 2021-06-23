const botaoCalcular = document.querySelector('#calcular');

botaoCalcular.addEventListener('click', function(){
    const constante = document.querySelector('#constante').value;
    const massa1 = document.querySelector('#massa1').value;
    const massa2 = document.querySelector('#massa2').value;
    const distancia = document.querySelector('#distancia').value;

    const resultado = document.querySelector('#resultado');

    resultado.value = (constante * massa1 * massa2)/(distancia * distancia); // poderia usar pow
})
