import ProjectsList from "../components/Admin/ProjectsList";
import General from "../components/Admin/General";

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
