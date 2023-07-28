import { User } from "./user.model";

export interface Meeting {
  id: string,
  creator: User,
  theme: string,
  members: User[],
  date: Date
}