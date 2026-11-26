/* =========================================================
   TREINA+ — Lógica do treinamento
   ========================================================= */

/*
 * Conteúdo dos setores. Para adicionar um novo setor ou módulo,
 * basta seguir o mesmo formato abaixo.
 * - correta: índice da alternativa certa (0 = A, 1 = B, 2 = C, 3 = D)
 * - video: caminho do arquivo de vídeo do módulo (ex.: "img/postura.mp4").
 *   Deixe "" enquanto o vídeo não estiver pronto.
 */
const SETORES = {
  salao: {
    nome: "Salão",
    icone: "🍴",
    modulos: [
      {
        titulo: "Postura e Encantamento",
        video: "",
        regras: [
          "Sorria ao fazer contato visual.",
          "Mantenha uma postura ereta e acolhedora.",
          "Use sempre um tom de voz amigável."
        ],
        pergunta: "Qual atitude ajuda a encantar o cliente logo na chegada?",
        alternativas: [
          "Olhar o celular durante o atendimento.",
          "Sorrir e manter contato visual.",
          "Falar apenas o necessário.",
          "Cruzar os braços ao receber o cliente."
        ],
        correta: 1
      },
      {
        titulo: "Servindo à Mesa",
        video: "",
        regras: [
          "Apresente o cardápio e sugira o prato do dia.",
          "Confirme o pedido repetindo-o ao cliente.",
          "Pergunte se está tudo bem após servir."
        ],
        pergunta: "O que fazer logo depois de anotar o pedido?",
        alternativas: [
          "Sair rapidamente para a cozinha.",
          "Pedir que o cliente escreva o pedido.",
          "Repetir o pedido para confirmar.",
          "Trazer a conta junto com o prato."
        ],
        correta: 2
      }
    ]
  },

  recepcao: {
    nome: "Recepção",
    icone: "🛎️",
    modulos: [
      {
        titulo: "Boas-vindas ao Hóspede",
        video: "",
        regras: [
          "Cumprimente o hóspede assim que ele chegar.",
          "Chame o hóspede pelo nome.",
          "Explique os serviços do hotel com clareza."
        ],
        pergunta: "Como iniciar o check-in de forma acolhedora?",
        alternativas: [
          "Terminar outra tarefa antes de olhar o hóspede.",
          "Cumprimentar com um sorriso e se apresentar.",
          "Pedir os documentos sem dizer nada.",
          "Pedir que ele aguarde sentado sem previsão."
        ],
        correta: 1
      },
      {
        titulo: "Resolvendo Reclamações",
        video: "",
        regras: [
          "Ouça com atenção, sem interromper.",
          "Peça desculpas e mostre empatia.",
          "Ofereça uma solução e acompanhe o caso."
        ],
        pergunta: "Um hóspede reclama do quarto. Qual a melhor primeira atitude?",
        alternativas: [
          "Dizer que a culpa é da governança.",
          "Ouvir com atenção e demonstrar empatia.",
          "Pedir que ele volte mais tarde.",
          "Discordar para defender o hotel."
        ],
        correta: 1
      }
    ]
  },

  governanca: {
    nome: "Governança",
    icone: "🛏️",
    modulos: [
      {
        titulo: "Discrição e Cuidado",
        video: "",
        regras: [
          "Bata na porta e anuncie-se antes de entrar.",
          "Respeite os pertences do hóspede.",
          "Cumprimente o hóspede nos corredores."
        ],
        pergunta: "O que fazer antes de entrar em um quarto ocupado?",
        alternativas: [
          "Entrar direto para ganhar tempo.",
          "Bater na porta e se anunciar.",
          "Ligar para a recepção e entrar.",
          "Esperar o hóspede sair do hotel."
        ],
        correta: 1
      },
      {
        titulo: "Padrão de Qualidade",
        video: "",
        regras: [
          "Siga o checklist de limpeza do quarto.",
          "Reponha os itens de cortesia.",
          "Comunique qualquer defeito à manutenção."
        ],
        pergunta: "Você encontrou o chuveiro com defeito. O que fazer?",
        alternativas: [
          "Ignorar, pois não é sua função.",
          "Avisar o hóspede para não usar.",
          "Comunicar a manutenção imediatamente.",
          "Esperar o hóspede reclamar."
        ],
        correta: 2
      }
    ]
  },

  bar: {
    nome: "Bar e Cozinha",
    icone: "🍹",
    modulos: [
      {
        titulo: "Higiene e Apresentação",
        video: "",
        regras: [
          "Mantenha o uniforme limpo e o cabelo preso.",
          "Lave as mãos antes de manipular alimentos.",
          "Capriche na apresentação de cada pedido."
        ],
        pergunta: "Qual atitude é obrigatória antes de preparar um pedido?",
        alternativas: [
          "Lavar as mãos corretamente.",
          "Experimentar o prato com a mão.",
          "Usar o celular para ver a receita.",
          "Deixar o cabelo solto."
        ],
        correta: 0
      },
      {
        titulo: "Atendimento no Balcão",
        video: "",
        regras: [
          "Cumprimente quem chega ao balcão.",
          "Informe o tempo de espera com sinceridade.",
          "Pergunte sobre alergias ou restrições."
        ],
        pergunta: "Por que perguntar sobre alergias ao cliente?",
        alternativas: [
          "Para aumentar o valor da conta.",
          "Para garantir a segurança do cliente.",
          "Porque é obrigatório só em hotéis de luxo.",
          "Não é necessário perguntar."
        ],
        correta: 1
      }
    ]
  }
};

const LETRAS = ["A", "B", "C", "D"];

/* ---------- Elementos da página ---------- */
const el = {
  setor: document.getElementById("setor"),
  iconeSetor: document.getElementById("iconeSetor"),
  video: document.getElementById("video"),
  videoVazio: document.getElementById("videoVazio"),
  textoProgresso: document.getElementById("textoProgresso"),
  barraModulos: document.getElementById("barraModulos"),
  tituloModulo: document.getElementById("tituloModulo"),
  listaRegras: document.getElementById("listaRegras"),
  pergunta: document.getElementById("pergunta"),
  form: document.getElementById("formQuiz"),
  alternativas: document.getElementById("alternativas"),
  feedback: document.getElementById("feedback"),
  btnEnviar: document.getElementById("btnEnviar"),
  btnProximo: document.getElementById("btnProximo"),
  conclusao: document.getElementById("conclusao"),
  textoConclusao: document.getElementById("textoConclusao"),
  btnRecomecar: document.getElementById("btnRecomecar"),
  saudacao: document.getElementById("saudacao")
};

/* ---------- Estado ---------- */
let setorAtual = "salao";
let moduloAtual = 0;
let acertos = 0;
let respondido = false;
let errouNesteModulo = false;

/* ---------- Utilidades ---------- */
function salvar(chave, valor) {
  try { localStorage.setItem("treinamais_" + chave, JSON.stringify(valor)); } catch (e) { /* sem storage */ }
}

function ler(chave) {
  try { return JSON.parse(localStorage.getItem("treinamais_" + chave)); } catch (e) { return null; }
}

function saudacaoPorHorario() {
  const h = new Date().getHours();
  if (h < 12) return "Bom dia, colaborador!";
  if (h < 18) return "Boa tarde, colaborador!";
  return "Boa noite, colaborador!";
}

/* ---------- Vídeo ---------- */
function carregarVideo(caminho) {
  el.video.pause();
  if (caminho) {
    el.video.src = caminho;
    el.video.classList.remove("oculto");
    el.videoVazio.classList.add("oculto");
  } else {
    el.video.removeAttribute("src");
    el.video.load();
    el.video.classList.add("oculto");
    el.videoVazio.classList.remove("oculto");
  }
}

/* ---------- Renderização ---------- */
function preencherSetores() {
  Object.entries(SETORES).forEach(([chave, s]) => {
    const op = document.createElement("option");
    op.value = chave;
    op.textContent = s.nome;
    el.setor.appendChild(op);
  });
  el.setor.value = setorAtual;
}

function renderizarModulo() {
  const setor = SETORES[setorAtual];
  const modulo = setor.modulos[moduloAtual];
  const total = setor.modulos.length;

  respondido = false;
  errouNesteModulo = false;
  el.form.classList.remove("respondido");

  el.iconeSetor.textContent = setor.icone;
  carregarVideo(modulo.video);

  el.textoProgresso.textContent = `Módulo ${moduloAtual + 1} de ${total}`;
  el.barraModulos.style.width = (moduloAtual / total) * 100 + "%";
  el.tituloModulo.textContent = modulo.titulo;

  el.listaRegras.innerHTML = "";
  modulo.regras.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = r;
    el.listaRegras.appendChild(li);
  });

  el.pergunta.textContent = modulo.pergunta;
  el.alternativas.innerHTML = "";
  modulo.alternativas.forEach((texto, i) => {
    const label = document.createElement("label");
    label.className = "alternativa";
    label.innerHTML = `
      <input type="radio" name="resposta" value="${i}">
      <span class="alternativa__letra">${LETRAS[i]})</span>
      <span class="alternativa__texto"></span>`;
    label.querySelector(".alternativa__texto").textContent = texto;
    el.alternativas.appendChild(label);
  });

  el.feedback.textContent = "";
  el.feedback.className = "quiz__feedback";
  el.btnEnviar.disabled = true;
  el.btnEnviar.classList.remove("oculto");
  el.btnProximo.classList.add("oculto");
}

/* ---------- Quiz ---------- */
el.alternativas.addEventListener("change", (e) => {
  if (respondido || e.target.name !== "resposta") return;
  el.feedback.textContent = "";
  el.feedback.className = "quiz__feedback";
  document.querySelectorAll(".alternativa").forEach((a) => a.classList.remove("selecionada"));
  e.target.closest(".alternativa").classList.add("selecionada");
  el.btnEnviar.disabled = false;
});

el.form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (respondido) return;

  const marcada = el.form.querySelector('input[name="resposta"]:checked');
  if (!marcada) return;

  const modulo = SETORES[setorAtual].modulos[moduloAtual];
  const escolha = Number(marcada.value);
  const label = marcada.closest(".alternativa");
  label.classList.remove("selecionada");

  if (escolha !== modulo.correta) {
    // Errou: marca só a alternativa escolhida e deixa tentar de novo,
    // sem revelar qual é a correta.
    errouNesteModulo = true;
    marcada.checked = false;
    marcada.disabled = true;
    label.classList.add("errada", "descartada");
    label.querySelector(".alternativa__letra").textContent = "✗";
    el.feedback.textContent = "Resposta incorreta. Revise as regras de ouro e tente novamente.";
    el.feedback.className = "quiz__feedback erro";
    el.btnEnviar.disabled = true;
    return;
  }

  // Acertou
  respondido = true;
  if (!errouNesteModulo) acertos += 1;
  el.form.classList.add("respondido");
  el.alternativas.querySelectorAll("input").forEach((i) => (i.disabled = true));
  label.classList.add("correta");
  label.querySelector(".alternativa__letra").textContent = "✓";
  el.feedback.textContent = errouNesteModulo
    ? "Isso mesmo! Agora você acertou."
    : "Muito bem! Você acertou de primeira.";
  el.feedback.className = "quiz__feedback ok";

  const ultimo = moduloAtual === SETORES[setorAtual].modulos.length - 1;
  el.btnEnviar.classList.add("oculto");
  el.btnProximo.textContent = ultimo ? "Finalizar treino ✓" : "Próximo módulo →";
  el.btnProximo.classList.remove("oculto");
  el.btnProximo.focus();
});

el.btnProximo.addEventListener("click", () => {
  const setor = SETORES[setorAtual];
  if (moduloAtual < setor.modulos.length - 1) {
    moduloAtual += 1;
    renderizarModulo();
  } else {
    finalizar();
  }
});

function finalizar() {
  const setor = SETORES[setorAtual];
  const total = setor.modulos.length;
  el.barraModulos.style.width = "100%";
  el.video.pause();

  el.textoConclusao.textContent =
    `Você concluiu o treino de ${setor.nome} e acertou ${acertos} de ${total} perguntas de primeira. Bom turno!`;
  el.conclusao.classList.remove("oculto");
  el.btnRecomecar.focus();

  const historico = ler("historico") || [];
  historico.push({ setor: setor.nome, acertos, total, data: new Date().toISOString() });
  salvar("historico", historico.slice(-20));
}

function reiniciar() {
  moduloAtual = 0;
  acertos = 0;
  renderizarModulo();
}

/* ---------- Eventos gerais ---------- */
el.setor.addEventListener("change", () => {
  setorAtual = el.setor.value;
  salvar("setor", setorAtual);
  reiniciar();
});

el.btnRecomecar.addEventListener("click", () => {
  el.conclusao.classList.add("oculto");
  reiniciar();
  el.setor.focus();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !el.conclusao.classList.contains("oculto")) {
    el.btnRecomecar.click();
  }
});

/* ---------- Início ---------- */
(function iniciar() {
  const salvo = ler("setor");
  if (salvo && SETORES[salvo]) setorAtual = salvo;
  el.saudacao.textContent = saudacaoPorHorario();
  preencherSetores();
  renderizarModulo();
})();