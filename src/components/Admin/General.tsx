import { useState, useEffect } from 'react';
import { useApplication } from '@context/Application';
import { checkHexFormat } from '@utils/checkHexFormat';
import ButtonsActions from './ButtonActions';
import PickerColor from './PickerColor';
import { BoxContent, DivisorLine, ListWrap } from '@styles/Containers';
import { SectionTitle } from '@styles/Texts';
import Switch from './Switch';

function General() {
  const {
    theme,
    showLogo,
    showSwitchTheme,
    setComponents,
    saveComponentsConfig,
    setColors,
    isDarkMode,
    saveThemeColors,
    loadingFetch,
  } = useApplication();

  const [themeColors, setThemeColors] = useState(theme);
  const [localComponents, setLocalComponents] = useState({
    showLogo,
    showSwitchTheme,
  });

  const hasValidColors = !checkHexFormat(themeColors);

  const handleInputColorChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const keyColor = event.target.name;
    const newValue = event.target.value;

    setThemeColors((prev) => ({ ...prev, [keyColor]: newValue }));
  };

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyComponent = event.target.name;
    const newValue = event.target.checked;

    setLocalComponents((prev) => ({ ...prev, [keyComponent]: newValue }));
  };

  useEffect(() => {
    setThemeColors(theme);
  }, [theme]);

  return (
    <>
      <BoxContent>
        <ListWrap>
          <SectionTitle>Cabeçalho</SectionTitle>
          <PickerColor
            title="Cor de fundo"
            name="header"
            color={themeColors.header}
            onChange={handleInputColorChange}
          />
          <PickerColor
            title="Cor do texto"
            name="headerText"
            color={themeColors.headerText}
            onChange={handleInputColorChange}
          />
          <Switch
            name="showLogo"
            active={showLogo}
            onChange={handleSwitch}
            title="Mostrar logo"
          />
          <Switch
            name="showSwitchTheme"
            active={showSwitchTheme}
            onChange={handleSwitch}
            title="Mostrar switch de tema"
          />
        </ListWrap>

        <DivisorLine />

        <ListWrap>
          <SectionTitle>Apresentação</SectionTitle>
          <PickerColor
            title="Cor de fundo"
            name="header"
            color={themeColors.header}
            onChange={handleInputColorChange}
          />
        </ListWrap>

        {/* TODO: Configurar todas as cores para cada sessão! */}
        {/* <PickerColor
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

        <PickerColor
          title="(Introdução) Cor do título"
          name="introTextTittle"
          color={themeColors.textBox}
          onChange={handleInputColorChange}
        /> */}
      </BoxContent>

      <ButtonsActions
        isDisabled={hasValidColors}
        loading={loadingFetch}
        saveOnChanges={() => {
          saveThemeColors(isDarkMode, themeColors);
          saveComponentsConfig(localComponents);
        }}
        setPreview={() => {
          setColors(themeColors);
          setComponents(localComponents);
        }}
      />
    </>
  );
}

export default General;
