/*function clima(estaLloviendo){
    if(estaLloviendo){
        console.log("Si esta lloviendo")
    }
    else{
        console.log("No esta lloviendo")
    }
}
clima(false)

function calcular(num1, num2, num3){
    let sumar = num1 + num2;
    let resultado = sumar + num3;
    return resultado
}
console.log(calcular(2,3,4))

function area(base,altura){
    let multi = base * altura;
    let resultado = multi / 2;
    return resultado
}
console.log (area(2,2))*/

/*let base = parseInt(prompt("Ingrese base: "));
let altura = parseInt(prompt("Ingrese altura: "));
let area;
area = (base * altura)/2;
Document.write("El area del triangulo es: " + area)

let nota1 = parseFloat(prompt("Ingrese la primera nota: "))
let nota2 = parseFloat(prompt("Ingrese la segunda nota: "))
let nota3 = parseFloat(prompt("Ingrese la tercera nota: "))
let promedio;
promedio = (nota1+nota2+nota3)/3;
document.write("Su promedio es: " ,promedio)
    if(promedio >= 3){
        console.log("Aprobo")
    }
    else{
        console.log("Reprueba")
    }*/

    function calculadora() {
        let operacion = String(prompt("Escoga la operacion que desee: SUMA, RESTA, MULTIPLICACION, DIVISION "))
        let num1 = parseFloat(prompt("Ingrese un numero: "))
        let num2 = parseFloat(prompt("Ingrese un segundo numero: "))
        let resultado;
        if (operacion == "suma") {
            resultado = num1 + num2;
        }
        if (operacion == "resta"){
            resultado = num1 - num2;
        }
        if (operacion == "multiplicacion"){
            resultado = num1 * num2;
        }
        if (operacion == "division"){
            resultado = num1 / num2;
        }
    
        document.write("El resultado de su operacion es: ", resultado)
    }