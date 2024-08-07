import { useState } from "react";
import { ProjectSection } from "../project/projectSection/ProjectSection";
import { IProject } from "../../shared/model/IProject";

export const Dashboard: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<IProject | undefined>(
    undefined
  );

  const onClick = (project: IProject) => setSelectedProject(project);

  return (
    <>
      <ProjectSection onClick={onClick} />
    </>
  );
};
