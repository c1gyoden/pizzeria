const kosarbaGombok = document.querySelectorAll(`.kosarba`)
const kosarElemek = document.getElementById("kosarElemek")
const kosarTorles = document.getElementById("kosarTorles")
const kosarGomb = document.getElementById("kosargomb")
const kosar = document.getElementById("kosar")

var kosarLathato = true
kosarGomb.addEventListener("click", () => {
    if (kosarLathato == true){
        kosar.style.display = "none"
    }
    else{
        kosar.style.display = "block"
    }
    kosarLathato = !kosarLathato
})

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
    Object.keys(sessionStorage).forEach(k => {
    if (k.split('_')[0] == "p"){
        if (sessionStorage.getItem(k) != 0 && sessionStorage.getItem(k) != null) {
            kosarElemek.innerHTML += `<p>${k.split('_')[1]}: ${sessionStorage.getItem(k)} db</p>`
            }
        }
    })
}

kosarTorles.addEventListener("click", () => {
    Object.keys(sessionStorage).forEach(k => {
        if (k.split('_')[0] == "p"){
            sessionStorage.setItem(k, 0)
        }
        kosarElemek.innerHTML = ``
    })
})



kosarFrissitese()