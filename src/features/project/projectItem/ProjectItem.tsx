import { Button } from "../../../components/button/Button";
import { Toolbar } from "../../../components/toolbar/Toolbar";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { DeleteIcon } from "../../../icons/DeleteIcon";
import { ProjectInfo } from "../../../services/ProjectInfo";
import { IProjectItemProps } from "./IProjectItemProps";
import styles from "./ProjectItem.module.scss";

export const ProjectItem: React.FC<IProjectItemProps> = (props) => {
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

  const onStop = () => props.onStop?.(props.project);

  const onStart = () => props.onStart?.(props.project);

  return (
    <div className={styles.projectItem}>
      <div className={styles.header}>
        <h3 className={styles.title}>{props.project.title}</h3>
        <DeleteIcon onClick={onDelete} />
      </div>
      <Toolbar className={styles.toolbar}>
        {ProjectInfo.hasRunningTask(props.project) ? (
          <Button className={styles.button} onClick={onStop}>
            {t(texts.projectItem.stop)}
          </Button>
        ) : (
          <Button className={styles.button} onClick={onStart}>
            {t(texts.projectItem.start)}
          </Button>
        )}
      </Toolbar>
    </div>
  );
};
