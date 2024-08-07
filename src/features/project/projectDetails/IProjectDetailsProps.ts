import { ITask } from "../../../shared/model/ITask";
import { IProject } from "./../../../shared/model/IProject";
export interface IProjectDetailsProps {
  onBack?: () => void;
  onDeleteTask?: (project: IProject, task: ITask) => void;
  project: IProject;
}
