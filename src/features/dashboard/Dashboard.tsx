import { useState } from "react";
import { IProject } from "../../shared/model/IProject";
import { ProjectDetails } from "../project/projectDetails/ProjectDetails";
import { ProjectSection } from "../project/projectSection/ProjectSection";

export const Dashboard: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<IProject | undefined>(
    undefined
  );

  const onProjectSelected = (project: IProject) => setSelectedProject(project);

  const onProjectUnselected = () => setSelectedProject(undefined);

  return (
    <>
      {selectedProject ? (
        <ProjectDetails
          onBack={onProjectUnselected}
          project={selectedProject}
        />
      ) : (
        <ProjectSection onClick={onProjectSelected} />
      )}
    </>
  );
};
