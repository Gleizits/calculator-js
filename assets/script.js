const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-operation');
const botonIgual = document.getElementsByName('data')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var opeActually = '';
var opeBerofe = '';
var operation = undefined;

botonNumeros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        addNumber(boton.innerText);
    })
});

botonOpera.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectOperation(boton.innerText);
    })
});

botonIgual.addEventListener('click', function () {
    calcularope();
    updateDisplay();
});

botonDelete.addEventListener('click', function () {
    clear();
    updateDisplay();
});

function selectOperation(op) {
    if (opeActually === '') return;
    if (opeBerofe !== '') {
        calcular()
    }
    operation = op.toString();
    opeBerofe = opeActually;
    opeActually = '';
}

function calcularope() {
    var calculope;
    const before = parseFloat(opeBerofe);
    const actually = parseFloat(opeActually);
    if (isNaN(before) || isNaN(actually)) return;
    switch (operation) {
        case '+':
            calculope = before + actually;
            break;
        case '-':
            calculope = before - actually;
            break;
        case 'x':
            calculope = before * actually;
            break;
        case '/':
            calculope = before / actually;
            break;
        default:
            return;
    }
    opeActually = calculope;
    operation = undefined;
    opeBerofe = '';
}

function addNumber(num) {
    opeActually = opeActually.toString() + num.toString();
    updateDisplay();
}

function clear() {
    opeActually = '';
    opeBerofe = '';
    operation = undefined;
}

function updateDisplay() {
    result.value = opeActually;
}

clear();


