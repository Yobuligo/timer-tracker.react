import { IProject } from "../shared/model/IProject";
import { ITask } from "../shared/model/ITask";

export class ProjectInfo {
  static hasRunningTask(project: IProject): boolean {
    return this.findRunningTask(project) !== undefined;
  }

  static findRunningTask(project: IProject): ITask | undefined {
    const index = project.tasks.findIndex(
      (task) => task.startedAt !== undefined && task.stoppedAt === undefined
    );
    if (index !== -1) {
      return project.tasks.at(index);
    }
    return undefined;
  }
}
