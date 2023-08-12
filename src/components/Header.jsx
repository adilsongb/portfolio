import { useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Containers } from '../styles';

function Header() {
  const [toggle, setToggle] = useState('buttonMenuMobile');
  const [navMobile, setNavMobile] = useState({})
  let isMobile = useMediaQuery('(max-width: 480px)');

  const hadleChange = () => {
    if (toggle === 'buttonMenuMobile') {
      setToggle('buttonMenuMobile change');
      setNavMobile({ height: '150px' });
    } else {
      setToggle('buttonMenuMobile');
      setNavMobile({ height: '0' })
    }
  }

  return (
    <Containers.Header>
      <Containers.Center>
        <h1 className="title-home">
          <a href="#home">{"</AG>"}</a>
        </h1>
        <nav style={isMobile ? navMobile : {}}>
          <ul>
            <li>
              <a href="#projetos" onClick={isMobile ? hadleChange : null}>
                PROJETOS
              </a>
            </li>
            <li>
              <a href="#sobre-mim" onClick={isMobile ? hadleChange : null}>
                SOBRE MIM
              </a>
            </li>
            <li>
              <a href="#contato" onClick={isMobile ? hadleChange : null}>
                CONTATO
              </a>
            </li>
          </ul>
        </nav>
        <button className={toggle} onClick={hadleChange}>
          <div className="iconMenu bar1"></div>
          <div className="iconMenu bar2"></div>
          <div className="iconMenu bar3"></div>
        </button>
      </Containers.Center>
    </Containers.Header>
  );
}

export default Header;
