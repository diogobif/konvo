export enum TaskStatusEnum {
  TODO = "todo",
  INPROGRESS = "in-progress",
  DONE = "done",
}

export type Task = {
  createdAt: string;
  createdBy: string;
  description: string;
  id: string;
  status: TaskStatusEnum;
  title: string;
  updatedAt: string;
};

export enum UserStatusEnum {
  ACTIVE = "active",
  AWAY = "away",
  NOT_DISTURB = "do not disturb",
}

export type User = {
  id: string;
  name: string;
  avatar: string;
  status: UserStatusEnum;
};

export type Message = {
  createdAt: string;
  id: string;
  text: string;
  userId: string;
};

export type WorkspaceData = {
  tasks: Task[];
  messages: Message[];
  users: User[];
};

export interface WorkspaceActions {
  setTasks(taskList: Task[]): void;
  updateTaskStatus(taskId: string, newStatus: TaskStatusEnum): void;
  setMessages(messageList: Message[]): void;
  setUsers(userList: User[]): void;
}

export interface WorkspaceState {
  tasks: Task[];
  messages: Message[];
  users: User[];
  actions: WorkspaceActions;
  isRequestInprogress: boolean;
}
