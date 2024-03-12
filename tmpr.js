const  deFaren = document.getElementById("far");
const btnconvCel = document.getElementById("resultCel");

function farTocel() {
    const farValue = deFaren.value;
    const calConv = (farValue - 32)*5/9;
    
    document.getElementById("demo").innerHTML= farValue +"°Farenheit = "+ calConv.toFixed(2) +"° Celsius";
    
}
btnconvCel.addEventListener("click",farTocel);

const  deCelsius = document.getElementById("cel");
const btnconvFar = document.getElementById("resultFar");

function celTofar() {
    const celValue = deCelsius.value;
    const calConvv = (celValue * 9/5)+32;
    
    document.getElementById("demo2").innerHTML= celValue +"°Celsius = "+ calConvv.toFixed(2) +"° Farenheit";
    
}
btnconvFar.addEventListener("click",celTofar);

const  deKel = document.getElementById("kel");
const btnKelcel = document.getElementById("resulC");

function kelTocel() {
    const kelValue = deKel.value;
    const calConvvv = kelValue - 273.15;
    
    document.getElementById("demo3").innerHTML= kelValue +"°Kelvin = "+ calConvvv.toFixed(2) +"° Celsius";
    
}
btnKelcel.addEventListener("click",kelTocel);

const celsiuss = document.getElementById("cels");
const btncelKel = document.getElementById("resultKel");

function celTokel() {
    const celsValue = celsiuss.value
    const convcelKel = celsValue + 273.15;

    document.getElementById("demo4").innerHTML= celsValue +"°Celsius = "+ convcelKel +"° Kelvin";
}
btncelKel.addEventListener("click",celTokel);

