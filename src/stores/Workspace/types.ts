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

export type Message = {
  createdAt: string;
  id: string;
  text: string;
  userId: string;
};

export type WorkspaceData = {
  tasks: Task[];
  messages: Message[];
};

export interface WorkspaceActions {
  setTasks(taskList: Task[]): void;
  getTasks(): Task[];
  setMessages(messageList: Message[]): void;
  getMessages(): Message[];
}

export interface WorkspaceState {
  tasks: Task[];
  messages: Message[];
  actions: WorkspaceActions;
}
