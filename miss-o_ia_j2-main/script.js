const caixaprincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se lembra de beber água ao longo do dia?",
        alternativas: [
            {
                texto: "Sim, com certeza!",
                afirmacao: "Ótimo trabalho! Manter-se hidratado é essencial para a saúde. Continue assim e lembre-se de beber água regularmente ao longo do dia."
            },
            {
                texto: "Não, às vezes esqueço.",
                afirmacao: "Tente definir lembretes para beber água durante o dia. Manter-se hidratado é crucial para o seu bem-estar físico e mental."
            }
        ]
    },
    {
        enunciado: "Você faz exercícios físicos regularmente?",
        alternativas: [
            {
                texto: "Sim, pratico atividades físicas regularmente!",
                afirmacao: "Excelente! Manter-se ativo é fundamental para a saúde física e mental. Continue com suas atividades e busque sempre novos desafios."
            },
            {
                texto: "Não, mas estou tentando começar.",
                afirmacao: "Ótimo! Começar com pequenas mudanças é o primeiro passo. Tente encontrar uma atividade que você goste e comece com sessões curtas para criar um hábito."
            }
        ]
    },
    {
        enunciado: "Você costuma ter uma alimentação balanceada?",
        alternativas: [
            {
                texto: "Sim, como uma variedade de alimentos saudáveis.",
                afirmacao: "Perfeito! Uma dieta equilibrada é crucial para a saúde geral. Continue incluindo frutas, vegetais e proteínas na sua alimentação."
            },
            {
                texto: "Não, tenho dificuldades em manter uma dieta balanceada.",
                afirmacao: "Considere consultar um nutricionista para obter orientações. Pequenas mudanças na sua alimentação podem ter grandes benefícios para a sua saúde."
            }
        ]
    },
    {
        enunciado: "Você dedica tempo para relaxar e cuidar da sua saúde mental?",
        alternativas: [
            {
                texto: "Sim, faço atividades que me ajudam a relaxar.",
                afirmacao: "Muito bem! Cuidar da saúde mental é tão importante quanto cuidar da saúde física. Continue praticando atividades que te proporcionem bem-estar."
            },
            {
                texto: "Não, estou sempre ocupado e esqueço de relaxar.",
                afirmacao: "É importante encontrar tempo para relaxar. Tente incorporar atividades de relaxamento, como meditação ou leitura, na sua rotina."
            }
        ]
    },
    {
        enunciado: "Você costuma dormir bem e ter uma boa qualidade de sono?",
        alternativas: [
            {
                texto: "Sim, tenho um sono reparador.",
                afirmacao: "Ótimo! Um bom sono é essencial para a saúde geral. Continue mantendo bons hábitos de sono e evite fatores que possam prejudicar sua qualidade de descanso."
            },
            {
                texto: "Não, meu sono é irregular.",
                afirmacao: "Tente estabelecer uma rotina de sono regular e criar um ambiente tranquilo para dormir. Boas práticas de sono podem melhorar significativamente sua qualidade de vida."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Aqui está o seu resultado:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
