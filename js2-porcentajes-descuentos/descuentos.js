let input_price = document.getElementById("input-price")
let input_discount = document.getElementById("input-discount")
let select_cupon = document.getElementById("select-cupon")
let result_user = document.getElementById("result-user")
let safe_money = document.getElementById("safe-money")

let price;
let discount;
let cupon;
let cuponValue;
let moneySafed;

let activated;
let precioFinal;

let cupones = [
    {nombre: "Mega_descuento", valor: 15},
    {nombre: "Festival_vallenato", valor: 35},
    {nombre: "Fin_semana", valor: 50}
]

function takeUserDates(){
    price = input_price.value;
    discount = input_discount.value;
    cupon = select_cupon.value;
    
    if(discount > 0 && cupon == "none"){
        activated = "discount";
    }
    if(cupon != "none" && discount == 0){
        activated = "cupon"
    }
    if(discount > 0 && cupon != "none"){
        activated = "both"
    }
    determinateDiscount()
}

function determinateDiscount (){
    switch(activated){
        case "discount":
            calculateDiscount(discount, price)
        break
        case "cupon":
            determinateCuponValue()
            calculateDiscount(cuponValue, price)
        break
        case "both":
            determinateCuponValue()
            calculateDiscountBoth(discount, cuponValue, price)
    }
}

function determinateCuponValue(){
    cupones.find(function(search){
        if(search.nombre == cupon){
            cuponValue = search.valor
        }
    })
}

function calculateDiscount(descuento, precio){
    let porcentajePrecioConDescuento = 100 - descuento;
    precioFinal = (precio * porcentajePrecioConDescuento) / 100
    precioFinal = precioFinal.toFixed(2)
    moneySafed = price - precioFinal
    moneySafed = moneySafed.toFixed(2)

    showResult()
}
function calculateDiscountBoth(descuento, cupon, precio){
    let porcentajePrecioConDescuento = 100 - descuento - cupon;
    precioFinal = (precio * porcentajePrecioConDescuento) / 100
    precioFinal = precioFinal.toFixed(2)
    moneySafed = price - precioFinal
    moneySafed = moneySafed.toFixed(2)

    showResult()
}

function showResult(){
    safe_money.innerHTML = "El dinero que estás ahorrando es de $<b>" + moneySafed + "</b>";
    result_user.innerHTML = "El precio que vas a pagar es de $ <b>" + precioFinal + "</b>";
}
