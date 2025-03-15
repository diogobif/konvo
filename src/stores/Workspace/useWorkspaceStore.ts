import { create } from "zustand";
import {
  Message,
  Task,
  TaskStatusEnum,
  User,
  WorkspaceActions,
  WorkspaceState,
} from "./types";

const useWorkspace = create<WorkspaceState>()((set, get) => ({
  isRequestInprogress: false,
  tasks: [],
  messages: [],
  users: [],
  actions: {
    setTasks: (taskList: Task[]): void => {
      set((state) => ({
        ...state,
        tasks: taskList,
      }));
    },
    updateTaskStatus: (taskId: string, newStatus: TaskStatusEnum): void => {
      const taskList: Task[] = get().tasks;
      set({ isRequestInprogress: true, tasks: [] });
      const tasktoUpdate: Task | undefined = taskList.find(
        (task) => task.id === taskId
      );
      // NOT THE SMARTER WAY BUT IT´S THE ONLY WAY ZUSTAND CAN NOTICE THAT THE STORE CHANGED
      if (tasktoUpdate) {
        const newTaskList: Task[] = taskList.filter(
          (task) => task.id !== taskId
        );
        newTaskList.push({ ...tasktoUpdate, status: newStatus });
        set({ tasks: newTaskList });
      }
      set({ isRequestInprogress: false });
    },

    setMessages: (messageList: Message[]): void => {
      set((state) => ({
        ...state,
        messages: messageList,
      }));
    },

    setUsers: (userList: User[]): void => {
      set((state) => ({
        ...state,
        users: userList,
      }));
    },
  },
}));

export const useWorkspaceActions = (): WorkspaceActions =>
  useWorkspace((state: WorkspaceState) => state.actions);

export const useWorkspaceTasks = (): Task[] =>
  useWorkspace((state) => state.tasks);

export const useWorkspaceMessages = (): Message[] =>
  useWorkspace((state) => state.messages);

export const useWorkspaceUsers = (): User[] =>
  useWorkspace((state) => state.users);

export const useWorkspaceisrequestInProgress = (): boolean =>
  useWorkspace((state: WorkspaceState) => state.isRequestInprogress);
