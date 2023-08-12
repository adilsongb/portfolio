import { Toggle } from '../styles/Toggle';

function ToggleTheme() {
  return (
    <Toggle>
      <label class="switch-label">
        <input type="checkbox" class="checkbox" />
        <span class="slider"></span>
      </label>
    </Toggle>
  );
}

export default ToggleTheme;
