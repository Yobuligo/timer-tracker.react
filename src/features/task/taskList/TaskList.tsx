import { TaskItem } from "../taskItem/TaskItem";
import { ITaskListProps } from "./ITaskListProps";
import styles from "./TaskList.module.scss";

export const TaskList: React.FC<ITaskListProps> = (props) => {
  const items = props.tasks.map((task) => (
    <TaskItem key={task.id} task={task} />
  ));

  return <div className={styles.taskList}>{items}</div>;
};
