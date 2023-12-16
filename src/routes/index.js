import ProjectsList from "../components/admin/ProjectsList";
import General from "../components/admin/General";

export function getAdminPage(page) {
  switch (page) {
    case 'geral':
      return <General />;
    case 'sobre':
      return <h2>sobre</h2>;
    case 'projetos':
      return (
        <ProjectsList />
      );
    default:
      return <h2>geral</h2>;
  }
}
