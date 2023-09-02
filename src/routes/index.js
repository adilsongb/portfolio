export function getAdminPage(page) {
  switch (page) {
    case 'geral':
      return <h2>geral</h2>;
    case 'sobre':
      return <h2>sobre</h2>;
    case 'projetos':
      return <h2>projetos</h2>
    default:
      return <h2>geral</h2>;
  }
}
