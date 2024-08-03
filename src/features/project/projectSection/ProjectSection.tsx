import { ProjectAdd } from "../projectAdd/ProjectAdd";
import { ProjectList } from "../projectList/ProjectList";
import { useProjectSectionViewModel } from "./useProjectSectionViewModel";

export const ProjectSection: React.FC = () => {
  const viewModel = useProjectSectionViewModel();

  return (
    <div>
      <ProjectAdd />
      <ProjectList projects={viewModel.projects} />
    </div>
  );
};
