const modulos = document.querySelectorAll(".modulo");
const feitos = document.querySelectorAll(".concluido").length;

document.getElementById("contagem").textContent = `${feitos} de ${modulos.length} módulos`;
document.getElementById("barra").style.width = `${(feitos / modulos.length) * 100}%`;

modulos.forEach((modulo) => {
    modulo.addEventListener("click", () => {
        alert("Você selecionou: " + modulo.querySelector("strong").textContent);
    });
});
