const input_saida = document.getElementById("saida");
const input_texto = document.getElementById("Conteudo");
const btn_gerador = document.getElementById("btn-gerador");
const btn_voltar = document.getElementById("btn-voltar");

btn_gerador.addEventListener("click", async function() {
    try {
        await window.generateqrcode.generate(input_saida.value, input_texto.value);
    } catch(erro) {
        alert(erro);
    }
});

btn_voltar.addEventListener("click", function() {
    window.location.href = "../index.html"
})