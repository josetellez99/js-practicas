function calcularPerimetroCuadrado() {
    let input = document.getElementById("input-square")
    let value = input.value;
    perimetroCuadrado(value)
}

function perimetroCuadrado(lado){
    let resultado = document.getElementById("perimeter-square-result")
    let perimetroCuadrado = lado * 4;
    resultado.innerHTML = perimetroCuadrado;    
}

function calcularAreaCuadrado() {
    let input = document.getElementById("input-square")
    let value = input.value;
    areaCuadrado(value)
}
function areaCuadrado (lado) {
    let resultado = document.getElementById("area-square-result")
    let areaCuadrado = lado * lado;
    resultado.innerHTML = areaCuadrado;
}

function calcularAlturaTrianguloIsoceles(){
    let base_longitude = document.getElementById("input-base-triangle")
    let side_longitude = document.getElementById("input-side-triangle")
    let base_value = base_longitude.value;
    let side_value = side_longitude.value;
    alturaTrianguloIsoceles(base_value, side_value)
}

function alturaTrianguloIsoceles(base, lado){
    let resultado = document.getElementById("triangle-isoceles-result")
    let height_isoceles_triangle = Math.sqrt((lado * lado) - (base * base) / 4)
    resultado.innerHTML = "El resultado es " + height_isoceles_triangle;
}