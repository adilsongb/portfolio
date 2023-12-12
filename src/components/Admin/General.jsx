import { useContext, useState, useEffect } from "react";
import { Application } from "../../context/Application";
import { checkHexFormat } from "../../utils/checkHexFormat";
import ButtonsActions from "./ButtonActions";

function General() {
  const {
    theme,
    themeSaved,
    setColors,
    isDarkMode,
    saveThemeColors,
    loadingFetch,
  } = useContext(Application);

  const [themeColors, setThemeColors] = useState(theme);

  const notColorChanged = 
    !checkHexFormat(themeColors) ||
    JSON.stringify(themeSaved) === JSON.stringify(themeColors)

  const handleInputColorChange = event => {
    const keyColor = event.target.name;
    const newValue = event.target.value;

    setThemeColors(prev => ({...prev, [keyColor]: newValue}))
  };

  useEffect(() => {
    setThemeColors(theme);
  }, [theme])

  return (
    <>
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

      <ButtonsActions
        isDisabled={notColorChanged}
        loading={loadingFetch}
        saveOnChanges={() => saveThemeColors(isDarkMode, themeColors)}
        setPreview={() => setColors(themeColors)}
      />
    </>
  );
}

export default General;
