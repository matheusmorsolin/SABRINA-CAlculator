function insertToDisplay(data){
    document.querySelector('#display').value += data
}

function clean(){
    document.querySelector('#display').value = ''
}

function back(){
    
    display.value = display.value.slice(0, -1)
}

function result(){
    const display = document.querySelector('#display')
    try {
        display.value = eval(display.value)

        } catch {

        }
}

function insertToDisplay(data) {
    const display = document.getElementById("display");

    const operadores = ["+", "-", "*", "/", "x", "√", "%"];
    const ultimoChar = display.value.slice(-1);

    if (operadores.includes(data) && operadores.includes(ultimoChar)) {
        return;
    }

    display.value += data;
}

window.onload = function() {
    setTimeout(function() {
        const calc = document.querySelector('.calculadora');
        calc.classList.add('mostrar-calculadora');
    }, 9500);
};

function calcularRaiz (){
    const display = document.querySelector('#display')
    const valorAtual = display.value;

    if (valorAtual) {
        display.value = Math.sqrt(eval(valorAtual));

    }
} 


/* mostrar raiz no display // não sei oq eu fiz aqui
if (display){
    if(display.includes ('&radic;')) {
        let numero = display.replace('&radic;', '');
        document.querySelector('#display').value = Math.sqrt(numero);
    } else {
        document.querySelector('#display').value = eval(display);
        }
} /*BUGS: raiz quadrada nao aparece, infinity x/0, % nao funciona direito, da pra dar . mais de uma vez*/

/*BUGS: raiz quadrada nao aparece, infinity x/0, % nao funciona direito, da pra dar . mais de uma vez*/
