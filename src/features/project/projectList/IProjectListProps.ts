import { IProject } from "../../../shared/model/IProject";

export interface IProjectListProps {
  onDelete?: (project: IProject) => void;
  projects: IProject[];
}
