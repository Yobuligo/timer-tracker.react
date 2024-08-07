import { DateTime } from "../../../core/services/date/DateTime";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { ITaskItemProps } from "./ITaskItemProps";
import styles from "./TaskItem.module.scss";

export const TaskItem: React.FC<ITaskItemProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.taskItem}>
      <div>{props.task.title}</div>
      <div>{DateTime.format(props.task.startedAt)}</div>
      <div>
        {props.task.stoppedAt
          ? DateTime.format(props.task.stoppedAt)
          : t(texts.taskItem.running)}
      </div>
    </div>
  );
};
