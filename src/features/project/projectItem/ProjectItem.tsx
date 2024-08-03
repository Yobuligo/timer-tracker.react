import { DeleteIcon } from "../../../icons/DeleteIcon";
import { IProjectItemProps } from "./IProjectItemProps";
import styles from "./ProjectItem.module.scss";

export const ProjectItem: React.FC<IProjectItemProps> = (props) => {
  const onDelete = () => props.onDelete?.(props.project);

  return (
    <div className={styles.projectItem}>
      <div className={styles.header}>
        <h3 className={styles.title}>{props.project.title}</h3>
        <DeleteIcon onClick={onDelete} />
      </div>
    </div>
  );
};
