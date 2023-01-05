let btnAdicionar = document.getElementById("add");

btnAdicionar.addEventListener("click", function() {
    const modal = document.querySelector(".modal")
    const fundo = document.querySelector(".fundo-modal")
    const actualStyle = modal.style.display
    if(actualStyle == "block") {
        modal.style.display = "nome"
        fundo.style.display = "none"
    } else {
        modal.style.display = "block"
        fundo.style.display = "block"
    }
}
)

let disciplina = document.getElementById("nome")
let dia = document.getElementById("momento")
let cor = document.getElementById("cor")

{
    nome: disciplina
    momento: dia
    palheta: cor
}
