window.onload = () => {
  /* Elementos do sites */
  const introSection = document.querySelector('#intro').style;
  const menuHeaderMobile = document.querySelector('#menuHeader');
  const buttonMenuHeaderMobile = document.querySelector('#buttonMenuMobile');
  const titleHeader = document.querySelector('#title');
  const header = document.querySelector('header');

  /* Configuração inicial */
  let heigthWindow = window.innerHeight;
  introSection.height = `${heigthWindow}px`;
  
  if (window.innerWidth < 768) {
    menuHeaderMobile.style.height = `${heigthWindow}px`;
  };

  /* Função de modificação da página */
  document.body.onresize = () => {
    heigthWindow = window.innerHeight;
    introSection.height = `${heigthWindow}px`

    if (window.innerWidth < 768) {
      menuHeaderMobile.style.height = `${heigthWindow}px`;
      menuHeaderMobile.style.display = 'none';
    } else {
      menuHeaderMobile.style.height = 'auto';
      menuHeaderMobile.style.display = 'block';
    }
  };

  window.onscroll = () => {
    if (window.pageYOffset > (100)) {
      header.classList.add('scrollHeader');
      titleHeader.style.opacity = '1';
    } else {
      header.classList.remove('scrollHeader');
      titleHeader.style.opacity = '0';
    }
  }

  /* Evento de click do botão de menu mobile */
  buttonMenuHeaderMobile.addEventListener('click', () => {
    buttonMenuHeaderMobile.classList.toggle('change');

    if (menuHeaderMobile.style.display === 'flex') {
      menuHeaderMobile.style.display = 'none';
      menuHeaderMobile.classList.toggle('menuHeaderFlex');
    } else {
      menuHeaderMobile.style.display = 'flex';
      menuHeaderMobile.classList.toggle('menuHeaderFlex');
    };
  });
};
