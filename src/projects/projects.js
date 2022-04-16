const thumbTaskhub = require("./img/taskhub.jpg");
const thumbRecipesApp = require("./img/recipes-app.jpg");
const thumbWallet = require("./img/trybe-wallet.jpg");
const thumbMlClone = require("./img/ml-clone.jpg");
const thumbMuseu = require("./img/museu-nacional.jpg");

module.exports = [
  {
    projectName: "Taskhub",
    thumb: thumbTaskhub,
    links: {
      deploy: "https://ontaskhub.web.app/",
      github: "https://github.com/adilsongb/taskhub",
    },
    description: "Aplicação de lista de tarefas diárias capaz de salvar o progresso do usuário na data em que a tarefa foi registrada.",
    technologies: ["React.js", "Context API", "CSS", "Firebase"],
  },
  {
    projectName: "Recipes App",
    thumb: thumbRecipesApp,
    links: {
      deploy: "https://recipes-app-eight.vercel.app/",
      github: "https://github.com/adilsongb/recipes-app",
    },
    description: "Aplicativo de receitas, desenvolvido em equipe, que consome dados de duas API's de comidas e de bebidas.",
    technologies: ["React.js", "Context API", "Bootstrap", "RTL"],
  },
  {
    projectName: "Trybe Wallet",
    thumb: thumbWallet,
    links: {
      deploy: "https://trybewallet-sable.vercel.app/",
      github: "https://github.com/adilsongb/trybewallet",
    },
    description: "Aplicação de gerenciamento de despesas que converte uma moeda internacional para Real (BRL).",
    technologies: ["React.js", "Redux", "CSS"],
  },
  {
    projectName: "Mercado Livre Clone",
    thumb: thumbMlClone,
    links: {
      deploy: "https://mercado-livre-clone-mu.vercel.app/",
      github: "https://github.com/adilsongb/mercado-livre-clone",
    },
    description: "Site de vendas inspirado no site de vendas do Mercado Livre.",
    technologies: ["React.js", "CSS"],
  },
  {
    projectName: "Museu Nacional",
    thumb: thumbMuseu,
    links: {
      deploy: "https://museu-nacional-azure.vercel.app/",
      github: "https://github.com/adilsongb/museu-nacional",
    },
    description: "Landing page do Museu Nacional.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
