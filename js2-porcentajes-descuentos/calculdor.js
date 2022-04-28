var boton = document.getElementById("boton")
var parte1 = document.getElementById("calcular1")
var parte2 = document.getElementById("calcular2")
var total = document.getElementById("total")
var subtotal = 0

boton.addEventListener("click", click)

function click(params)
{
    subtotal = parte1.value + parte2.value;
    total.innerHTML = subtotal;
}


