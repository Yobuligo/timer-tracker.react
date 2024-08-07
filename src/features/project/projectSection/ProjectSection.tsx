import { ProjectAdd } from "../projectAdd/ProjectAdd";
import { ProjectList } from "../projectList/ProjectList";
import { IProjectSectionProps } from "./IProjectSectionProps";
import styles from "./ProjectSection.module.scss";
import { useProjectSectionViewModel } from "./useProjectSectionViewModel";

export const ProjectSection: React.FC<IProjectSectionProps> = (props) => {
  const viewModel = useProjectSectionViewModel();

  return (
    <div className={styles.projectSection}>
      <ProjectAdd onAdd={viewModel.onAdd} />
      <ProjectList
        onClick={props.onClick}
        onDelete={viewModel.onDelete}
        onStart={viewModel.onStart}
        onStop={viewModel.onStop}
        projects={viewModel.projects}
      />
    </div>
  );
};
