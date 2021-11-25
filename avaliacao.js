function enviarcomentario() {
    let nome = document.getElementById("nome").value;
    let nota = document.getElementById("nota").value;
    let comentario = document.getElementById("coment").value;
    let tablebody = document.getElementById("table-body");

    function conferir() {
            if (nota > 10) {
                nota = "erro";
            }
    }

    conferir();

    let html = "<tr>";
        html +="<td>" + nome + "</td>"
        html +="<td>" + nota + "</td>"
        html +="<td>" + comentario + "</td>"
        html +="</tr>"
        tablebody.innerHTML +=html;
    return true;
}