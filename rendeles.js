const rendeloTelefon = document.getElementById("rendeloTelefon")
const rendelesLeadasaGomb = document.getElementById("rendelesLeadasaGomb")
const rendeloTelefonDisplay = document.getElementById("rendeloTelefonDisplay")

rendeloTelefon.addEventListener("input", () =>{
    rendeloTelefonDisplay.innerHTML = "+" + rendeloTelefon.value
}
)

rendelesLeadasaGomb.addEventListener("click", () => {
    if (sessionStorage.getItem("ar") == 0 || sessionStorage.getItem("ar") == null){
        alert("Üres a kosarad!")
    }
    else{
        alert("Sajnáljuk, de a megadott településre nem szállítunk pizzát!")
    }

})