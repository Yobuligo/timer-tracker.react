import { Button } from "../../../components/button/Button";
import { Toolbar } from "../../../components/toolbar/Toolbar";
import { Duration } from "../../../core/services/date/Duration";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { DeleteIcon } from "../../../icons/DeleteIcon";
import { StartIcon } from "../../../icons/StartIcon";
import { StopIcon } from "../../../icons/StopIcon";
import { IProjectItemProps } from "./IProjectItemProps";
import styles from "./ProjectItem.module.scss";
import { useProjectItemViewModel } from "./useProjectItemViewModel";

export const ProjectItem: React.FC<IProjectItemProps> = (props) => {
  const viewModel = useProjectItemViewModel(props);
  const { t } = useTranslation();

  return (
    <div className={styles.projectItem}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          {viewModel.isRunning && <StartIcon />}
          <h3 className={styles.title}>{props.project.title}</h3>
        </div>
        <Button onClick={viewModel.onDelete}>
          <DeleteIcon className={styles.icon} />
        </Button>
      </div>
      <Toolbar className={styles.toolbar}>
        <div>
          {viewModel.durationTotal && (
            <>{Duration.format(viewModel.durationTotal)}</>
          )}
        </div>
        {viewModel.isRunning ? (
          <Button className={styles.button} onClick={viewModel.onStop}>
            <StopIcon className={styles.icon} />
          </Button>
        ) : (
          <Button className={styles.button} onClick={viewModel.onStart}>
            <StartIcon className={styles.icon} />
          </Button>
        )}
        <div>
          {viewModel.isRunning && viewModel.duration && (
            <>{Duration.format(viewModel.duration)}</>
          )}
        </div>
      </Toolbar>
    </div>
  );
};
