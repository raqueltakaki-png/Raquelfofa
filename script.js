// ===============================
// BOAS-VINDAS
// ===============================

window.onload = function () {
alert("🍟 Bem-vindo ao site do McDonald's!");
};

// ===============================
// VALIDAÇÃO DO FORMULÁRIO
// ===============================

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (e) {

const nome = document.querySelector('input[type="text"]').value;
const email = document.querySelector('input[type="email"]').value;
const mensagem = document.querySelector("textarea").value;

if (nome === "" || email === "" || mensagem === "") {
alert("Preencha todos os campos!");
e.preventDefault();
} else {
alert("Mensagem enviada com sucesso!");
}

});

// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const botao = document.createElement("button");

botao.innerHTML = "⬆";

botao.style.position = "fixed";
botao.style.bottom = "20px";
botao.style.right = "20px";
botao.style.padding = "12px 16px";
botao.style.border = "none";
botao.style.borderRadius = "50%";
botao.style.background = "#d62300";
botao.style.color = "white";
botao.style.cursor = "pointer";
botao.style.display = "none";

document.body.appendChild(botao);

window.onscroll = function () {

if (document.documentElement.scrollTop > 300) {
botao.style.display = "block";
} else {
botao.style.display = "none";
}

};

botao.onclick = function () {
window.scrollTo({
top: 0,
behavior: "smooth"
});
};

// ===============================
// DATA ATUAL
// ===============================

const footer = document.querySelector("footer");

const data = document.createElement("p");

const hoje = new Date();

data.innerHTML =
"Data: " + hoje.toLocaleDateString("pt-BR");

footer.appendChild(data);

// ===============================
// MODO ESCURO
// ===============================

const modo = document.createElement("button");

modo.innerHTML = "🌙 Modo Escuro";

modo.className = "btn btn-warning";

modo.style.position = "fixed";
modo.style.top = "90px";
modo.style.right = "20px";

document.body.appendChild(modo);

modo.onclick = function () {

document.body.classList.toggle("bg-dark");
document.body.classList.toggle("text-white");

};

// ===============================
// ALTERAÇÃO AUTOMÁTICA DO BANNER
// ===============================

const banner = document.getElementById("inicio");

const imagens = [
"imagens/banner.jpg",
"imagens/foto1.jpg",
"imagens/foto2.jpg"
];

let indice = 0;

setInterval(function () {

indice++;

if (indice >= imagens.length) {
indice = 0;
}

banner.style.backgroundImage =
`linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('${imagens[indice]}')`;

}, 4000);
