import { create } from "zustand";
import { Message, Task, WorkspaceActions, WorkspaceState } from "./types";

const useWorkspace = create<WorkspaceState>()((set, get) => ({
  tasks: [],
  messages: [],
  actions: {
    setTasks: (taskList: Task[]): void => {
      set((state) => ({
        ...state,
        tasks: taskList,
      }));
    },
    getTasks: (): Task[] => {
      return [];
    },

    setMessages: (messageList: Message[]): void => {
      set((state) => ({
        ...state,
        messages: messageList,
      }));
    },
    getMessages: (): Message[] => {
      return [];
    },
  },
}));

export const useWorkspaceActions = (): WorkspaceActions =>
  useWorkspace((state: WorkspaceState) => state.actions);

export const useWorkspaceTasks = (): Task[] =>
  useWorkspace((state) => state.tasks);

export const useWorkspaceMessages = (): Message[] =>
  useWorkspace((state) => state.messages);
