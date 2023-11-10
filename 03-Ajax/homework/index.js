const btton = document.getElementById("button")
const URL = "https://localhost:5000/amigos"
const lista = document.getElementById("lista")

function viewList() {
    lista.innerHTML = "";
    $.get(`${URL}`)
    //FALTA
    //FALTA
    //FALTA
}
btton.addEventListener

const search = $("#search")

function searchFriend() {
    let id = $("#input").val() //document.getElementById("input").value, es lo que está adentro del id
    let amigo = document.getElementById("amigo")
    amigo.empty();
    //URL + "/" + ID 
    $.get(`${URL}/${id}`, () => {
        amigo.textContent(res, name);

    })
}

search.addEventListener("click", searchFriend)