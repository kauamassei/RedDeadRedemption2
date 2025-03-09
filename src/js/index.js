

const botao1 = document.getElementById("btn1");
const elementoPlataformas1 = document.getElementById("plat1");

const botao2 = document.getElementById("btn2");
const elementoPlataformas2 = document.getElementById("plat2");

botao1.addEventListener("click", () => {
    
    elementoPlataformas1.classList.toggle("ativo");

});
botao2.addEventListener("click", () => {
    
    elementoPlataformas2.classList.toggle("ativo");

});
