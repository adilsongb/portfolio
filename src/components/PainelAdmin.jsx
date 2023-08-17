import { useContext, useEffect, useState } from "react";
import { Application } from "../context/Application";
import { AdminPainel } from "../styles/Admin";
import { AiFillEdit } from "react-icons/ai"
import { IoMdClose } from "react-icons/io";
import { Button, CloseButton } from "../styles/Buttons";

function PaineAdmin() {
  const { theme, setColors } = useContext(Application);

  const [showPainel, setShowPainel] = useState(false);
  const [themeColors, setThemeColors] = useState(theme);

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
    <AdminPainel $showPainel={showPainel} onClick={() => !showPainel && setShowPainel(true)}>
      <AiFillEdit />

      {!!showPainel && (
        <>
          <CloseButton onClick={() => setShowPainel(false)}>
            <IoMdClose className="closeButton" />
          </CloseButton>

          <div className="tabs">
            <span className="tab">Geral</span>
            <span className="tab">Sobre</span>
            <span className="tab">Projetos</span>
          </div>

          <div className="content">
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
            <Button disabled={!checkHexFormat(themeColors)} onClick={() => setColors(themeColors)}>
              Aplicar
            </Button>
            <Button disabled={!checkHexFormat(themeColors)}>
              Salvar
            </Button>
          </div>
        </>
      )}
    </AdminPainel>
  );
}

export default PaineAdmin;
