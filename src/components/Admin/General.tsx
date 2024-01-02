import { useContext, useState, useEffect } from 'react';
import { Application } from '../../context/Application';
import { checkHexFormat } from '../../utils/checkHexFormat';
import ButtonsActions from './ButtonActions';
import PickerColor from './PickerColor';
import { BoxContent } from '../../styles/Containers';

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
    JSON.stringify(themeSaved) === JSON.stringify(themeColors);

  const handleInputColorChange = (event) => {
    const keyColor = event.target.name;
    const newValue = event.target.value;

    setThemeColors((prev) => ({ ...prev, [keyColor]: newValue }));
  };

  useEffect(() => {
    setThemeColors(theme);
  }, [theme]);

  return (
    <>
      <BoxContent
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <PickerColor
          title="Cor primária"
          name="primary"
          color={themeColors.primary}
          onChange={handleInputColorChange}
        />

        <PickerColor
          title="Cor secundária"
          name="secondary"
          color={themeColors.secondary}
          onChange={handleInputColorChange}
        />

        <PickerColor
          title="Cor intermediária"
          name="intermediary"
          color={themeColors.intermediary}
          onChange={handleInputColorChange}
        />

        <PickerColor
          title="Cor de texto 1"
          name="textTitle"
          color={themeColors.textTitle}
          onChange={handleInputColorChange}
        />

        <PickerColor
          title="Cor de texto 2"
          name="textBox"
          color={themeColors.textBox}
          onChange={handleInputColorChange}
        />

        {/* A ser desenvolvido */}

        <PickerColor
          title="(Introdução) Cor do título"
          name="introTextTittle"
          color={themeColors.textBox}
          onChange={handleInputColorChange}
        />
      </BoxContent>

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
