import { DateTime } from "../../../core/services/date/DateTime";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { DeleteIcon } from "../../../icons/DeleteIcon";
import { ITaskItemProps } from "./ITaskItemProps";
import styles from "./TaskItem.module.scss";

export const TaskItem: React.FC<ITaskItemProps> = (props) => {
  const { t } = useTranslation();

  const onDelete = () => {
    if (
      window.confirm(
        t(texts.taskItem.deleteQuestion, { title: props.task.title })
      )
    ) {
      props.onDelete?.(props.task);
    }
  };

  return (
    <div className={styles.taskItem}>
      <div>{props.task.title}</div>
      <div>{DateTime.format(props.task.startedAt)}</div>
      <div>
        {props.task.stoppedAt
          ? DateTime.format(props.task.stoppedAt)
          : t(texts.taskItem.running)}
      </div>
      <DeleteIcon onClick={onDelete} />
    </div>
  );
};
