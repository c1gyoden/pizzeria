const kosarbaGombok = document.querySelectorAll(`.kosarba`)
const kosar = document.getElementById("kosarmain")


kosarbaGombok.forEach(gomb => {
    gomb.addEventListener("click", () => {
        if (sessionStorage.getItem("bejelentkezve") == null){
            alert("A kosárba adáshoz jelentkezz be!")  
        }
        else{
            let db = Number(sessionStorage.getItem(gomb.id))
            sessionStorage.setItem(gomb.id, db+=1)



            kosarbaGombok.forEach(elem => {
                kosar.innerHTML = `${elem.id} ${sessionStorage.getItem(elem.id)}`
            });
        }
    })
})
kosarbaGombok.forEach(elem => {
    kosar.innerHTML = `${elem.id} ${sessionStorage.getItem(elem.id)}`
})
