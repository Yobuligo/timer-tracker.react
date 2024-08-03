import { ProjectAdd } from "../projectAdd/ProjectAdd";
import { ProjectList } from "../projectList/ProjectList";
import { useProjectSectionViewModel } from "./useProjectSectionViewModel";
import styles from "./ProjectSection.module.scss";

export const ProjectSection: React.FC = () => {
  const viewModel = useProjectSectionViewModel();

  return (
    <div className={styles.projectSection}>
      <ProjectAdd onAdd={viewModel.onAdd} />
      <ProjectList projects={viewModel.projects} />
    </div>
  );
};
