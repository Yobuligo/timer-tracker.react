import { useCallback, useEffect, useState } from "react";
import { Button } from "../../../components/button/Button";
import { Toolbar } from "../../../components/toolbar/Toolbar";
import { DateTime } from "../../../core/services/date/DateTime";
import { Duration } from "../../../core/services/date/Duration";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { DeleteIcon } from "../../../icons/DeleteIcon";
import { StartIcon } from "../../../icons/StartIcon";
import { ProjectInfo } from "../../../services/ProjectInfo";
import { IProjectItemProps } from "./IProjectItemProps";
import styles from "./ProjectItem.module.scss";
import { TaskInfo } from "../../../services/TaskInfo";

export const ProjectItem: React.FC<IProjectItemProps> = (props) => {
  const [duration, setDuration] = useState<Duration | undefined>(undefined);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  const { t } = useTranslation();

  const onDelete = () => {
    if (
      window.confirm(
        t(texts.projectItem.deleteProject, { title: props.project.title })
      )
    ) {
      props.onDelete?.(props.project);
    }
  };

  const onStop = () => {
    props.onStop?.(props.project);
    stopTimer();
  };

  const onStart = () => props.onStart?.(props.project);

  const isRunning = ProjectInfo.hasRunningTask(props.project);

  const calcDuration = useCallback(() => {
    const task = ProjectInfo.findRunningTask(props.project);
    if (task) {
      setDuration(TaskInfo.toDuration(task));
    } else {
      setDuration(undefined);
    }
  }, [props.project]);

  const startTimer = useCallback(() => {
    const timeoutId = setTimeout(() => {
      calcDuration();
      startTimer();
    }, 1000);
    setTimeoutId(timeoutId);
  }, [calcDuration]);

  const stopTimer = useCallback(() => clearTimeout(timeoutId), [timeoutId]);

  useEffect(() => {
    if (isRunning) {
      startTimer();
    } else {
      setDuration(undefined);
    }
  }, [isRunning, startTimer]);

  return (
    <div className={styles.projectItem}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          {isRunning && <StartIcon />}
          <h3 className={styles.title}>{props.project.title}</h3>
        </div>
        <DeleteIcon onClick={onDelete} />
      </div>
      <Toolbar className={styles.toolbar}>
        <div>
          {isRunning && duration && (
            <>{`d:${duration.days} h:${duration.hours} m:${duration.minutes} s:${duration.seconds}`}</>
          )}
        </div>
        {isRunning ? (
          <Button className={styles.button} onClick={onStop}>
            {t(texts.projectItem.stop)}
          </Button>
        ) : (
          <Button className={styles.button} onClick={onStart}>
            {t(texts.projectItem.start)}
          </Button>
        )}
        <div>
          {isRunning && duration && (
            <>{`d:${duration.days} h:${duration.hours} m:${duration.minutes} s:${duration.seconds}`}</>
          )}
        </div>
      </Toolbar>
    </div>
  );
};
