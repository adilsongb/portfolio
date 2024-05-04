import { useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Containers } from '../styles';
import ToggleTheme from './ToggleTheme';
import { useApplication } from '../context/Application';

function Header() {
  const { isDarkMode, changeTheme, showLogo, showSwitchTheme } =
    useApplication();
  const [toggle, setToggle] = useState('buttonMenuMobile');
  const [navMobile, setNavMobile] = useState({});
  const isMobile = useMediaQuery('(max-width: 580px)');

  const hadleChange = () => {
    if (toggle === 'buttonMenuMobile') {
      setToggle('buttonMenuMobile change');
      setNavMobile({ height: '150px' });
    } else {
      setToggle('buttonMenuMobile');
      setNavMobile({ height: '0' });
    }
  };

  const handleClick = isMobile ? hadleChange : undefined;

  return (
    <Containers.Header>
      <Containers.Center>
        <h1 className="title-home">
          {showLogo && <a href="#home">{'</AG>'}</a>}
        </h1>
        <nav style={isMobile ? navMobile : {}}>
          <ul>
            <li>
              <a href="#projetos" onClick={handleClick}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#sobre-mim" onClick={handleClick}>
                Sobre mim
              </a>
            </li>
            <li>
              <a href="#contato" onClick={handleClick}>
                Contato
              </a>
            </li>
            {showSwitchTheme && (
              <ToggleTheme darkMode={!isDarkMode} onChangeTheme={changeTheme} />
            )}
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
