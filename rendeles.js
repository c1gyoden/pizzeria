const rendeloTelefon = document.getElementById("rendeloTelefon")
const rendelesgomb = document.getElementById("rendelesgomb")
const rendeloTelefonDisplay = document.getElementById("rendeloTelefonDisplay")

rendeloTelefon.addEventListener("input", () =>{
    rendeloTelefonDisplay.innerHTML = "+" + rendeloTelefon.value
}
)

rendelesgomb.addEventListener("click", () => {
    alert("A megadott településre nem szállítunk pizzát!")
})