import { Toggle } from '../styles/Toggle';

function ToggleTheme({
  darkMode,
  onChangeTheme,
}: {
  darkMode: boolean;
  onChangeTheme: () => void;
}) {
  return (
    <Toggle>
      <label className="switch-label">
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={darkMode}
          onClick={onChangeTheme}
        />
        <span className="slider"></span>
      </label>
    </Toggle>
  );
}

export default ToggleTheme;
