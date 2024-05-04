import { SwitchManager } from '@styles/Inputs';

function Switch({
  title,
  active,
  onChange,
  name,
}: {
  title: string;
  name: string;
  active: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <SwitchManager>
      <label>
        <input
          type="checkbox"
          name={name}
          defaultChecked={active}
          onChange={onChange}
        />
        <span></span>
      </label>
      {!!title && <span>{title}</span>}
    </SwitchManager>
  );
}

export default Switch;
