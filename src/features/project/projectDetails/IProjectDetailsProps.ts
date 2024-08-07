import { IProject } from "./../../../shared/model/IProject";
export interface IProjectDetailsProps {
  onBack?: () => void;
  project: IProject;
}
