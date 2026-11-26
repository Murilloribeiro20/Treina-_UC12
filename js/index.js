const form = document.getElementById("form-login");
const input = document.getElementById("documento");
const erro = document.getElementById("erro");
const botao = form.querySelector(".botao");

const digitos = (v) => v.replace(/\D/g, "");

const cpfValido = (cpf) => {
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  for (let t = 9; t < 11; t++) {
    let soma = 0;
    for (let i = 0; i < t; i++) soma += +cpf[i] * (t + 1 - i);
    if ((((soma * 10) % 11) % 10) !== +cpf[t]) return false;
  }
  return true;
};

const telefoneValido = (tel) => /^[1-9]{2}9?\d{8}$/.test(tel);

const formatar = (d) =>
  d.length === 11 && cpfValido(d)
    ? d.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    : d.length > 6
    ? `(${d.slice(0, 2)}) ${d.slice(2, 2 + (d.length === 11 ? 5 : 4))}-${d.slice(2 + (d.length === 11 ? 5 : 4))}`
    : d.length > 2
    ? `(${d.slice(0, 2)}) ${d.slice(2)}`
    : d;

const setErro = (msg) => ((erro.textContent = msg), (erro.hidden = !msg));

input.oninput = () => {
  setErro("");
  input.value = formatar(digitos(input.value).slice(0, 11));
};

form.onsubmit = async (e) => {
  e.preventDefault();
  const valor = digitos(input.value);
  if (!valor) return setErro("Informe seu telefone ou CPF.");
  if (!cpfValido(valor) && !telefoneValido(valor))
    return setErro("Telefone ou CPF inválido.");

  botao.disabled = true;
  botao.textContent = "Entrando...";

  try {
    // TODO: substituir por fetch real
  } catch {
    setErro("Não foi possível entrar. Tente novamente.");
  } finally {
    botao.disabled = false;
    botao.textContent = "Entrar no turno";
  }
};