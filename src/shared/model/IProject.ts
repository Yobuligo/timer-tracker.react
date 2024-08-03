import { IHavePath } from "../../api/core/types/IHavePath";
import { IEntity } from "../types/IEntity";

export interface IProject extends IEntity {
  title: string;
}

export const ProjectMeta: IHavePath = { path: "/projects" };
