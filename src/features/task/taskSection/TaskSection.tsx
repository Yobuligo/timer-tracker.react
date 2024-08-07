import { TaskList } from "../taskList/TaskList";
import { ITaskSectionProps } from "./ITaskSectionProps";
import styles from "./TaskSection.module.scss";

export const TaskSection: React.FC<ITaskSectionProps> = (props) => {
  return (
    <div className={styles.taskSection}>
      <TaskList tasks={props.tasks} />
    </div>
  );
};
