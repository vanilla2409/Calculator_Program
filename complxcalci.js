function display(a){
    disp = document.getElementById("screen")
    if(disp.innerHTML == 0){
        disp.innerHTML = a
    }
    else{
        disp.innerHTML += a
    }

}
function u_clear(){
    if(document.getElementById("screen").innerHTML == ""){
        data.innerHTML = ""
    }

    let data = document.getElementById("screen")
    data.innerHTML = 0;
}
function calculate(){
    
    let data = document.getElementById("screen")
    if(document.getElementById("screen").innerHTML == ""){
        data.innerHTML = ""
    }
    let expression = data.innerHTML
    console.log(expression)
    let result = eval(expression)
    console.log(result)
    data.innerHTML = result

}
function del(){
    let data =  document.getElementById("screen")
    data.innerHTML = data.innerHTML.slice(0, -1)
}
function on(){
    let data = document.getElementById("screen")
    data.innerHTML = 0
}
function off(){
    let data = document.getElementById("screen")
    data.innerHTML = ""
}

