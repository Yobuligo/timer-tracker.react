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
    let duration: Duration | undefined = undefined;
    if (task) {
      if (task.stoppedAt) {
        duration = DateTime.subtract(task.startedAt, task.stoppedAt);
        setDuration(duration);
      } else {
        duration = DateTime.subtract(task.startedAt, new Date());
        setDuration(duration);
      }
    } else {
      duration = undefined;
      setDuration(undefined);
    }
    return duration;
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
          {isRunning && (
            <>
              {`${duration?.hours}:${duration?.minutes}:${duration?.seconds}`}
            </>
          )}
        </div>
      </Toolbar>
    </div>
  );
};
