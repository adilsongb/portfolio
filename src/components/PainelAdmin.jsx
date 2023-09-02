import { useContext, useEffect, useState } from "react";
import { Application } from "../context/Application";
import { AdminPainel, TabNav } from "../styles/Admin";
import { AiFillEdit } from "react-icons/ai"
import { IoMdClose } from "react-icons/io";
import { Button, CloseButton } from "../styles/Buttons";
import { getAdminPage } from "../routes";

function PaineAdmin() {
  const {
    theme,
    themeSaved,
    setColors,
    isDarkMode,
    saveThemeColors,
    loadingFetch,
  } = useContext(Application);

  const [showPainel, setShowPainel] = useState(false);
  const [tabName, setTabName] = useState('geral');

  const [themeColors, setThemeColors] = useState(theme);

  const notColorChanged = 
    !checkHexFormat(themeColors) ||
    JSON.stringify(themeSaved) === JSON.stringify(themeColors)

  function checkHexFormat(color) {
    const colorRegex = /^#[0-9A-Fa-f]{6}$/i;
    
    for (const key in color) {
      if (color.hasOwnProperty(key)) {
        if (!colorRegex.test(color[key])) {
          return false;
        }
      }
    }
    
    return true;
  }  

  const handleInputColorChange = event => {
    const keyColor = event.target.name;
    const newValue = event.target.value;

    setThemeColors(prev => ({...prev, [keyColor]: newValue}))
  };

  useEffect(() => {
    setThemeColors(theme);
  }, [theme])

  return (
    <AdminPainel
      $showPainel={showPainel}
      onClick={() => !showPainel && setShowPainel(true)}
    >
      <AiFillEdit />

      {!!showPainel && (
        <section>
          <CloseButton onClick={() => setShowPainel(false)}>
            <IoMdClose className="closeButton" />
          </CloseButton>

          <div className="tabs">
            <TabNav
              className="tab"
              onClick={() => setTabName('geral')}
              $selected={tabName === 'geral'}
            >
              Geral
            </TabNav>
            <TabNav
              className="tab"
              onClick={() => setTabName('sobre')}
              $selected={tabName === 'sobre'}
            >
              Sobre
            </TabNav>
            <TabNav
              className="tab"
              onClick={() => setTabName('projetos')}
              $selected={tabName === 'projetos'}
            >
              Projetos
            </TabNav>
          </div>

          <div className="content">
            {/* {getAdminPage(tabName)} */}
            <div className="color-manager">
              <span>Cor primária</span>
              <div>
                <input type="color" id="color-picker" name="primary" value={themeColors.primary} onChange={event => handleInputColorChange(event)} />
                <input type="text" name="primary" value={themeColors.primary} onChange={(event) => handleInputColorChange(event)} />
              </div>
            </div>

            <div className="color-manager">
              <span>Cor secundária</span>
              <div>
                <input type="color" id="color-picker" name="secondary" value={themeColors.secondary} onChange={event => handleInputColorChange(event)} />
                <input type="text" name="secondary" value={themeColors.secondary} onChange={(event) => handleInputColorChange(event)} />
              </div>
            </div>

            <div className="color-manager">
              <span>Cor intermediária</span>
              <div>
                <input type="color" id="color-picker" name="intermediary" value={themeColors.intermediary} onChange={event => handleInputColorChange(event)} />
                <input type="text" name="intermediary" value={themeColors.intermediary} onChange={(event) => handleInputColorChange(event)} />
              </div>
            </div>

            <div className="color-manager">
              <span>Cor de texto 1</span>
              <div>
                <input type="color" id="color-picker" name="textTitle" value={themeColors.textTitle} onChange={event => handleInputColorChange(event)} />
                <input type="text" name="textTitle" value={themeColors.textTitle} onChange={(event) => handleInputColorChange(event)} />
              </div>
            </div>

            <div className="color-manager">
              <span>Cor de texto 2</span>
              <div>
                <input type="color" id="color-picker" name="textBox" value={themeColors.textBox} onChange={event => handleInputColorChange(event)} />
                <input type="text" name="textBox" value={themeColors.textBox} onChange={(event) => handleInputColorChange(event)} />
              </div>
            </div>
          </div>

          <div className="actions">
            <Button
              disabled={notColorChanged}
              onClick={() => setColors(themeColors)}
            >
              Aplicar
            </Button>
            <Button
              disabled={notColorChanged}
              onClick={() => saveThemeColors(isDarkMode, themeColors)}
            >
              {loadingFetch ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </section>
      )}
    </AdminPainel>
  );
}

export default PaineAdmin;
