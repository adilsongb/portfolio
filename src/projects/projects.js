const thumbTaskhub = require('./img/taskhub.jpg');
const thumbRecipesApp = require('./img/recipes-app.jpg');
const thumbWallet = require('./img/trybe-wallet.jpg');
const thumbMlClone = require('./img/ml-clone.jpg');
const thumbMuseu = require('./img/museu-nacional.jpg');

module.exports = [
  {
    projectName: 'Taskhub',
    thumb: thumbTaskhub,
    links: {
      deploy: 'https://ontaskhub.web.app/',
      github: 'https://github.com/adilsongb/taskhub',
    },
    description: 'Lista de tarefas diárias'
  },
  {
    projectName: 'Recipes App',
    thumb: thumbRecipesApp,
    links: {
      deploy: 'https://recipes-app-eight.vercel.app/',
      github: 'https://github.com/adilsongb/recipes-app',
    },
    description: 'Aplicativo de receitas'
  },
  {
    projectName: 'Trybe Wallet',
    thumb: thumbWallet,
    links: {
      deploy: 'https://trybewallet-sable.vercel.app/',
      github: 'https://github.com/adilsongb/trybewallet',
    },
    description: 'Gerenciador de despesas'
  },
  {
    projectName: 'Mercado Livre Clone',
    thumb: thumbMlClone,
    links: {
      deploy: 'https://mercado-livre-clone-mu.vercel.app/',
      github: 'https://github.com/adilsongb/mercado-livre-clone',
    },
    description: 'Site de vendas inspirado no Mercado Livre'
  },
  {
    projectName: 'Museu Nacional - Site',
    thumb: thumbMuseu,
    links: {
      deploy: 'https://museu-nacional-azure.vercel.app/',
      github: 'https://github.com/adilsongb/museu-nacional',
    },
    description: 'Site do Museu Nacional'
  },
];
