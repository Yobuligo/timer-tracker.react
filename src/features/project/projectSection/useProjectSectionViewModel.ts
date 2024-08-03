import { useState } from "react";
import { IProject } from "../../../shared/model/IProject";

export const useProjectSectionViewModel = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  return { projects };
};
