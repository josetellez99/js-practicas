var total = document.getElementById("total")
var boton1 = document.getElementById("boton")
var boton2 = document.getElementById("button")
var boton3 = document.getElementById("baton")
var boton4 = document.getElementById("biton")
var frutas = document.getElementById("frutas_llevadas")
var boton5 = document.getElementById("buton")
var cantidad = document.getElementById("Cantidad")
var subtotal = 0;
var frutastotal = 0;

cantidad.innerHTML = 15;


boton1.addEventListener("click", click)

function click(params)
{
    subtotal = subtotal + 1.50;
    cantidad.innerHTML = cantidad.innerHTML -1;
    frutastotal = frutastotal + 1;

    if (cantidad.innerHTML < 0) 
{
   alert("ya no hay mas") 
   cantidad.innerHTML = 0;
   if (boton1 = function click() {})
{
   subtotal = subtotal - 1.50;
   frutastotal = frutastotal - 1
}
}
total.innerHTML = subtotal;
frutas.innerHTML = frutastotal;
}
boton2.addEventListener("click", clicko)

function clicko(params)
{
    subtotal = subtotal + 2;
    cantidad.innerHTML = cantidad.innerHTML -1;
    frutastotal = frutastotal + 1;

    if (cantidad.innerHTML < 0) 
{
   alert("ya no hay mas") 
   cantidad.innerHTML = 0;
   if (boton2 = function clicko() {})
{
   subtotal = subtotal - 2;
   frutastotal = frutastotal - 1
}
}
total.innerHTML = subtotal;
frutas.innerHTML = frutastotal;
}boton3.addEventListener("click", clicki)

function clicki(params)
{
    subtotal = subtotal + 3.50;
    cantidad.innerHTML = cantidad.innerHTML -1;
    frutastotal = frutastotal + 1;

    if (cantidad.innerHTML < 0) 
{
   alert("ya no hay mas") 
   cantidad.innerHTML = 0;
   if (boton3 = function clicki() {})
{
   subtotal = subtotal - 3.50;
   frutastotal = frutastotal - 1
}
}
total.innerHTML = subtotal;
frutas.innerHTML = frutastotal;
}boton4.addEventListener("click", clicku)

function clicku(params)
{
    subtotal = subtotal + 5;
    cantidad.innerHTML = cantidad.innerHTML -1;
    frutastotal = frutastotal + 1;

    if (cantidad.innerHTML < 0) 
{
   alert("ya no hay mas") 
   cantidad.innerHTML = 0;
   if (boton4 = function clicku() {})
{
   subtotal = subtotal - 5;
   frutastotal = frutastotal - 1
}
}
total.innerHTML = subtotal;
frutas.innerHTML = frutastotal;
}boton5.addEventListener("click", clickn)

function clickn(params)
{
    subtotal = subtotal + 3;
    cantidad.innerHTML = cantidad.innerHTML -1;
    frutastotal = frutastotal + 1;

    if (cantidad.innerHTML < 0) 
{
   alert("ya no hay mas") 
   cantidad.innerHTML = 0;
   if (boton5 = function clickn() {})
{
   subtotal = subtotal - 3;
   frutastotal = frutastotal - 1
}
}
total.innerHTML = subtotal;
frutas.innerHTML = frutastotal;
}
