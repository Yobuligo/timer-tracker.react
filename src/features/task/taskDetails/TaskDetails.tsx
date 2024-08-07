import { ArrowBackIcon } from "../../../icons/ArrowBackIcon";
import { ITaskDetailsProps } from "./ITaskDetailsProps";
import styles from "./TaskDetails.module.scss";

export const TaskDetails: React.FC<ITaskDetailsProps> = (props) => {
  return (
    <div className={styles.taskDetails}>
      <ArrowBackIcon onClick={props.onBack} />
    </div>
  );
};
