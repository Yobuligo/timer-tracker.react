import { IProject } from "../../../shared/model/IProject";

export interface IProjectItemProps {
  onDelete?: (project: IProject) => void;
  project: IProject;
}
