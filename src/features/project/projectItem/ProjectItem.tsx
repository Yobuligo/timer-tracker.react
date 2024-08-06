import { Button } from "../../../components/button/Button";
import { Toolbar } from "../../../components/toolbar/Toolbar";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { DeleteIcon } from "../../../icons/DeleteIcon";
import { StartIcon } from "../../../icons/StartIcon";
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
        <DeleteIcon onClick={viewModel.onDelete} />
      </div>
      <Toolbar className={styles.toolbar}>
        <div>
          {viewModel.durationTotal && (
            <>{`d:${viewModel.durationTotal.days} h:${viewModel.durationTotal.hours} m:${viewModel.durationTotal.minutes} s:${viewModel.durationTotal.seconds}`}</>
          )}
        </div>
        {viewModel.isRunning ? (
          <Button className={styles.button} onClick={viewModel.onStop}>
            {t(texts.projectItem.stop)}
          </Button>
        ) : (
          <Button className={styles.button} onClick={viewModel.onStart}>
            {t(texts.projectItem.start)}
          </Button>
        )}
        <div>
          {viewModel.isRunning && viewModel.duration && (
            <>{`d:${viewModel.duration.days} h:${viewModel.duration.hours} m:${viewModel.duration.minutes} s:${viewModel.duration.seconds}`}</>
          )}
        </div>
      </Toolbar>
    </div>
  );
};
