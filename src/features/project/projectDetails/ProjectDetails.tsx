import { ArrowBackIcon } from "../../../icons/ArrowBackIcon";
import { IProjectDetailsProps } from "./IProjectDetailsProps";
import styles from "./ProjectDetails.module.scss";

export const ProjectDetails: React.FC<IProjectDetailsProps> = (props) => {
  return (
    <div className={styles.projectDetails}>
      <ArrowBackIcon onClick={props.onBack} />
    </div>
  );
};
