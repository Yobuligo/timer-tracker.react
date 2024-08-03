import { useState } from "react";
import { uuid } from "../../../core/utils/uuid";
import { IProject } from "../../../shared/model/IProject";

export const useProjectSectionViewModel = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  const onAdd = (title: string) => {
    setProjects((previous) => {
      previous.push({
        id: uuid(),
        title,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return [...previous];
    });
  };

  return { onAdd, projects };
};
