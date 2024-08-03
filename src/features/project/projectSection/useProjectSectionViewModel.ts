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

  const onDelete = (project: IProject) => {
    setProjects((previous) => {
      const index = previous.findIndex((item) => item.id === project.id);
      if (index !== -1) {
        previous.splice(index, 1);
      }
      return [...previous];
    });
  };

  return { onAdd, onDelete, projects };
};
