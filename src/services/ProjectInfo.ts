import { IProject } from "../shared/model/IProject";
import { ITask } from "../shared/model/ITask";

export class ProjectInfo {
  /**
   * Returns if the given {@link project} has a running task
   */
  static hasRunningTask(project: IProject): boolean {
    return this.findRunningTask(project) !== undefined;
  }

  /**
   * Returns the running task of the given {@link project} or undefined if no task is running
   */
  static findRunningTask(project: IProject): ITask | undefined {
    const index = project.tasks.findIndex(
      (task) => task.startedAt !== undefined && task.stoppedAt === undefined
    );
    if (index !== -1) {
      return project.tasks.at(index);
    }
    return undefined;
  }

  /**
   * Stops the running task of the given {@link project} and returns it or returns undefined if no task is running
   */
  static stopRunningTask(project: IProject): ITask | undefined {
    const runningTask = this.findRunningTask(project);
    if (!runningTask) {
      return;
    }

    runningTask.stoppedAt = new Date();
    return runningTask;
  }
}
