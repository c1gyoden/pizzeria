const felhasznalonevInput = document.getElementById("felhasznalonevInput")
const jelszoInput = document.getElementById("jelszoInput")
const bejelentkezesGomb = document.getElementById("bejelentkezesGomb")
const loginAblak = document.getElementById("loginAblak")
const loggedinAblak = document.getElementById("loggedinAblak")
const kijelentkezesGomb = document.getElementById("kijelentkezesGomb")

if (localStorage.getItem("taroltFelhasznalonev") != null && localStorage.getItem("taroltJelszo") != null){
        loginAblak.style.display = "none"
        loggedinAblak.style.display = "block"
}

bejelentkezesGomb.addEventListener("click", () => {
    if (felhasznalonevInput != null && jelszoInput != null) { 
        loginAblak.style.display = "none"
        loggedinAblak.style.display = "block"
        localStorage.setItem("taroltFelhasznalonev", felhasznalonevInput.value)
        localStorage.setItem("taroltJelszo", jelszoInput.value)
    }
})

kijelentkezesGomb.addEventListener("click", () => {
    if (felhasznalonevInput != null && jelszoInput != null) { 
        loginAblak.style.display = "block"
        loggedinAblak.style.display = "none"
        localStorage.clear()
    }
})

/* localstorage helyett cookiet kéne használni */