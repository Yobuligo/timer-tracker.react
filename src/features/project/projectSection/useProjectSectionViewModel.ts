import { useState } from "react";
import { uuid } from "../../../core/utils/uuid";
import { ProjectInfo } from "../../../services/ProjectInfo";
import { IProject } from "../../../shared/model/IProject";

export const useProjectSectionViewModel = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  const onAdd = (title: string) => {
    setProjects((previous) => {
      previous.push({
        id: uuid(),
        tasks: [],
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

  const onStart = (project: IProject) =>
    setProjects((previous) => {
      const task = ProjectInfo.findRunningTask(project);
      if (task) {
        task.stoppedAt = new Date();
      }

      const index = previous.findIndex((item) => item.id === project.id);
      previous.splice(index, 1, project);
      return [...previous];
    });

  const onStop = (project: IProject) => {};

  return { onAdd, onDelete, onStart, onStop, projects };
};
