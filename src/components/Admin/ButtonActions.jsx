import { Button } from "../../styles/Buttons";

function ButtonsActions({ isDisabled, setPreview, saveOnChanges, loading }) {
  return (
    <div className="actions">
      <Button
        disabled={isDisabled}
        onClick={setPreview}
      >
        Aplicar
      </Button>
      <Button
        disabled={isDisabled}
        onClick={saveOnChanges}
      >
        {loading ? 'Salvando...' : 'Salvar'}
      </Button>
    </div>
  );
}

export default ButtonsActions;
