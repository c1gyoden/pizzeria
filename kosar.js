const kosarbaGombok = document.querySelectorAll(`.kosarba`)
const kosarElemek = document.getElementById("kosarElemek")
const kosarTorles = document.getElementById("kosarTorles")
const kosarGomb = document.getElementById("kosargomb")
const kosar = document.getElementById("kosar")
const kosarAr = document.getElementById("kosarAr")
const rendelesGomb = document.getElementById("rendelesgomb")

var kosarLathato = sessionStorage.getItem("kosarLathato") == "true" ? true : false
kosarLathatosaga()
kosarGomb.addEventListener("click", () => {
    kosarLathato = !kosarLathato        
    sessionStorage.setItem("kosarLathato", kosarLathato)
    kosarLathatosaga()
})

function kosarLathatosaga(){
    if (kosarLathato == true){
        kosar.style.display = "block"
    }
    else{
        kosar.style.display = "none"
    }
}

kosarbaGombok.forEach(gomb => {
    gomb.addEventListener("click", () => {
        if (sessionStorage.getItem("bejelentkezve") == null){
            alert("A kosárba adáshoz jelentkezz be!")  
        }
        else{
            let db = Number(sessionStorage.getItem(gomb.id))
            sessionStorage.setItem(gomb.id, db+=1)


            kosarFrissitese()
        }
    })
})

function kosarFrissitese(){
    kosarElemek.innerHTML = ``
    var ar = 0;
    Object.keys(sessionStorage).forEach(k => {
    if (k.split('_')[0] == "p"){
        if (sessionStorage.getItem(k) != 0 && sessionStorage.getItem(k) != null) {
            kosarElemek.innerHTML += `<p>${k.split('_')[1]}: ${sessionStorage.getItem(k)} db</p>`
            ar += k.split('_')[2] * sessionStorage.getItem(k)
            sessionStorage.setItem("ar", ar)
        }
        }
    })
    if (ar != 0){
    kosarAr.innerHTML = `Ár: ${ar} Ft`
    }
}

kosarTorles.addEventListener("click", () => {
    kosarTorlese()
})

function kosarTorlese(){
    Object.keys(sessionStorage).forEach(k => {
        if (k.split('_')[0] == "p"){
            sessionStorage.setItem(k, 0)
        }
        kosarElemek.innerHTML = ``
        kosarAr.innerHTML = ``
        sessionStorage.setItem("ar", 0)
    })
}

rendelesGomb.addEventListener("click", () => {
    if (sessionStorage.getItem("bejelentkezve") == null){
        alert("A rendeléshez jelentkezz be!")
    }
    else {
        window.location.href = "rendeles.html"
    }
})


kosarFrissitese()