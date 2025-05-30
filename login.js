const felhasznalonevInput = document.getElementById("felhasznalonevInput")
const jelszoInput = document.getElementById("jelszoInput")
const bejelentkezesGomb = document.getElementById("bejelentkezesGomb")
const loginAblak = document.getElementById("loginAblak")
const loggedinAblak = document.getElementById("loggedinAblak")
const kijelentkezesGomb = document.getElementById("kijelentkezesGomb")

var bejelentkezve = false

if (sessionStorage.getItem("bejelentkezve") == null){
    loginAblak.style.display = "block"
    loggedinAblak.style.display = "none"
}

if (sessionStorage.getItem("bejelentkezve") != null){
        loginAblak.style.display = "none"
        loggedinAblak.style.display = "block"
}

bejelentkezesGomb.addEventListener("click", () => {
    
        loginAblak.style.display = "none"
        loggedinAblak.style.display = "block"
        sessionStorage.setItem("taroltFelhasznalonev", felhasznalonevInput.value)
        sessionStorage.setItem("taroltJelszo", jelszoInput.value)
        sessionStorage.setItem("bejelentkezve", true)
    
})

kijelentkezesGomb.addEventListener("click", () => {
    
        loginAblak.style.display = "block"
        loggedinAblak.style.display = "none"
        sessionStorage.clear()
    
})