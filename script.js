//Celsius para Kelvin
let kelvinBtn = document.getElementById("kelvin")

kelvinBtn.addEventListener("click", function(){
    let celsius = parseFloat(document.querySelector(".celsius").value)
    let result = document.getElementById("result")
    result.innerHTML = celsius + 273.15 + " " + "graus Kelvin"
})

//Celsius para Fahrenheit
let fahrenheitBtn = document.getElementById("fahrenheit")

fahrenheitBtn.addEventListener("click", function(){
    let celsius2 = parseFloat(document.querySelector(".celsius2").value)
    let result2 = document.getElementById("result2")
    result2.innerHTML = celsius2 * 1.8 + 32 + " " + "graus Fahrenheit"
})

//Kelvin para Celsius

let celsiusBtn = document.getElementById("celsius")

celsiusBtn.addEventListener("click", function(){
    let kelvin = parseFloat(document.querySelector(".kelvin").value)
    let result3 = document.getElementById("result3")
    result3.innerHTML = kelvin - 273.15 + " " + "graus Celsius"
 })

 //Kelvin para Fahrenheit
 let fahrenheitBtn2 = document.getElementById("fahrenheit2")

 fahrenheitBtn2.addEventListener("click", function(){
     let kelvin2 = parseFloat(document.querySelector(".kelvin2").value)
     let result4 = document.getElementById("result4")
     result4.innerHTML = (kelvin2 - 273.15) * 9/5 + 32 + " " + "graus Fahrenheit "
 })

 //Fahrenheit para Celsius
let celsius2Btn = document.getElementById("celsius2")

celsius2Btn.addEventListener("click", function(){
    let fahrenheit = parseFloat(document.querySelector(".fahrenheit").value)
    let result5 = document.getElementById("result5")
    result5.innerHTML = (fahrenheit - 32) * 5/9 + " " + "grais Celsius"
})

//Fahrenheit para Kelvin
let kelvin2Btn = document.getElementById("kelvin2")

kelvin2Btn.addEventListener("click", function(){
    let fahrenheit2 = parseFloat(document.querySelector(".fahrenheit2").value)
    let result6 = document.getElementById("result6")
    result6.innerHTML = (fahrenheit2 - 32) * 5/9 + 273.15 + " " + "graus Kelvin"
})


let btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    document.body.classList.toggle("darkTheme")
    if(document.body.classList.contains("darkTheme")){
        btn.innerText = "Light Theme"
    }

    else{
        btn.innerText = "Dark Theme"
    }
})