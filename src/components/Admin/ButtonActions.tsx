import { Button } from '@styles/Buttons';

function ButtonsActions({
  isDisabled,
  setPreview,
  saveOnChanges,
  loading,
}: {
  isDisabled: boolean;
  setPreview: () => void;
  saveOnChanges: () => void;
  loading: boolean;
}) {
  return (
    <div className="actions">
      <Button disabled={isDisabled} onClick={setPreview}>
        Aplicar
      </Button>
      <Button disabled={isDisabled} onClick={saveOnChanges}>
        {loading ? 'Salvando...' : 'Salvar'}
      </Button>
    </div>
  );
}

export default ButtonsActions;
