import { ArrowBackIcon } from "../../../icons/ArrowBackIcon";
import { TaskSection } from "../../task/taskSection/TaskSection";
import { IProjectDetailsProps } from "./IProjectDetailsProps";
import styles from "./ProjectDetails.module.scss";

export const ProjectDetails: React.FC<IProjectDetailsProps> = (props) => {
  return (
    <div className={styles.projectDetails}>
      <ArrowBackIcon onClick={props.onBack} />
      <TaskSection tasks={props.project.tasks} />
    </div>
  );
};
