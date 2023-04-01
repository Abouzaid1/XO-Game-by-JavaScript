var turn = "x"
var title = document.querySelector(".title")
var squares = []
var x = document.getElementById("x")
var o = document.getElementById("o")
var qus = document.getElementById("qus")
var btn = document.getElementById("btn")

function winner() {
    for (i = 1; i < 10; i++) {
        squares[i] = document.querySelector('#item' + i).innerHTML
    }

    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[2] != "") {
        title.innerHTML = squares[1] + " winner"
        document.getElementById("item1").style.background = "red"
        document.getElementById("item2").style.background = "red"
        document.getElementById("item3").style.background = "red"

        setInterval(() => { title.innerHTML += "." }, 1000)
        setTimeout(() => { location.reload() }, 4000)
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != "") {
        title.innerHTML = squares[4] + " winner"
        document.getElementById("item4").style.background = "red"
        document.getElementById("item5").style.background = "red"
        document.getElementById("item6").style.background = "red"
        setInterval(() => { title.innerHTML += "." }, 1000)
        setTimeout(() => { location.reload() }, 4000)
    }
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != "") {
        title.innerHTML = squares[7] + " winner"
        document.getElementById("item7").style.background = "red"
        document.getElementById("item8").style.background = "red"
        document.getElementById("item9").style.background = "red"
        setInterval(() => { title.innerHTML += "." }, 1000)
        setTimeout(() => { location.reload() }, 4000)
    }
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[4] != "") {
        title.innerHTML = squares[1] + " winner"
        document.getElementById("item1").style.background = "red"
        document.getElementById("item4").style.background = "red"
        document.getElementById("item7").style.background = "red"
        setInterval(() => { title.innerHTML += "." }, 1000)
        setTimeout(() => { location.reload() }, 4000)
    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != "") {
        title.innerHTML = squares[2] + " winner"
        document.getElementById("item2").style.background = "red"
        document.getElementById("item5").style.background = "red"
        document.getElementById("item8").style.background = "red"
        setInterval(() => { title.innerHTML += "." }, 1000)
        setTimeout(() => { location.reload() }, 4000)
    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != "") {
        title.innerHTML = squares[3] + " winner"
        document.getElementById("item3").style.background = "red"
        document.getElementById("item6").style.background = "red"
        document.getElementById("item9").style.background = "red"
        setInterval(() => { title.innerHTML += "." }, 1000)
        setTimeout(() => { location.reload() }, 4000)
    }
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != "") {
        title.innerHTML = squares[1] + " winner"
        document.getElementById("item1").style.background = "red"
        document.getElementById("item5").style.background = "red"
        document.getElementById("item9").style.background = "red"
        setInterval(() => { title.innerHTML += "." }, 1000)
        setTimeout(() => { location.reload() }, 4000)
    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != "") {
        title.innerHTML = squares[3] + " winner"
        document.getElementById("item3").style.background = "red"
        document.getElementById("item5").style.background = "red"
        document.getElementById("item7").style.background = "red"
        setInterval(() => { title.innerHTML += "." }, 1000)
        setTimeout(() => { location.reload() }, 4000)
    }
    else if (squares[1] != ""&&squares[2] != ""&&squares[3] != ""&&squares[4] != ""&&squares[5] != ""&&squares[6] != ""&&squares[7] != ""&&squares[8] != ""&&squares[9] != "") {
        title.innerHTML = "Draw"
        setInterval(() => { title.innerHTML += "." }, 1000)
        setTimeout(() => { location.reload() }, 4000)
    }
}
function game(id) {
    let element = document.getElementById(id)
    if (turn === "x" && element.innerHTML == "") {
        element.innerHTML = "X"
        element.style.background = "orange"
        title.innerHTML = `Its ${o.value}'s Turn`
        turn = "o"

    }
    else if (turn === "o" && element.innerHTML == "") {
        element.innerHTML = "O"
        element.style.background = "green"

        title.innerHTML = `Its ${x.value}'s Turn`

        turn = "x"
    }
    winner()
}



    btn.addEventListener("click",()=>{
        
        if(x.value.length >= 1){
        document.getElementById("place").style.display = ("none")
        document.getElementById("clr").style.display =("none")
        }else{
            console.log("hahaha")
        }
    
    })


