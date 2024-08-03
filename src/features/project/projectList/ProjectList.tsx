import { ProjectItem } from "../projectItem/ProjectItem";
import { IProjectListProps } from "./IProjectListProps";
import styles from "./ProjectList.module.scss";

export const ProjectList: React.FC<IProjectListProps> = (props) => {
  const items = props.projects.map((project) => (
    <ProjectItem key={project.id} project={project} />
  ));

  return <div className={styles.projectList}>{items}</div>;
};
