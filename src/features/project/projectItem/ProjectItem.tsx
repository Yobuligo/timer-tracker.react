import { IProjectItemProps } from "./IProjectItemProps";
import styles from "./ProjectItem.module.scss";

export const ProjectItem: React.FC<IProjectItemProps> = (props) => {
  return (
    <div className={styles.projectItem}>
      <h3 className={styles.title}>{props.project.title}</h3>
    </div>
  );
};
