const input_link = document.getElementById("Link");
const input_saida = document.getElementById("Saida");
const btn_gerar = document.getElementById("btn-gerar");

btn_gerar.addEventListener("click", async function() {
    const link = input_link.value;
    const saida = input_saida.value;

    try {
        await window.generateqrcode.generate(saida, link);
    } catch(erro) {
        alert("Erro: " + erro);
    }
});

document.getElementById("Voltar").addEventListener("click", function() {
    window.location.href = "../index.html"
});