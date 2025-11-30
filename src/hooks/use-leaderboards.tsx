// stores/useLeaderBoardStore.ts
import {
  iLeaderBoardItem,
  iLeaderBoardState,
} from "@/lib/interfaces/iLeaderBoard";
import { create } from "zustand";

export const initialLeaderBoards: iLeaderBoardItem[] = [
  {
    prize: "20,000",
    position: 2,
    avatar: "/images/avatar.svg",
    team: "Wagger",
    earning: "50,000",
    name: "Jamie",
  },
  {
    prize: "30,000",
    position: 1,
    avatar: "/images/avatar.svg",
    team: "Wagger",
    earning: "50,000",
    name: "Leon Yoah",
  },
  {
    prize: "12,000",
    position: 3,
    avatar: "/images/avatar.svg",
    team: "Wagger",
    earning: "20,000",
    name: "Jhony tan",
  },
];

export const useLeaderBoardStore = create<iLeaderBoardState>((set, get) => ({
  // Initial state
  leaderBoards: initialLeaderBoards,

  // Actions
  setLeaderBoards: (leaderBoards: iLeaderBoardItem[]) => {
    if (leaderBoards.length !== 3) {
      console.warn("LeaderBoards must contain exactly 3 items");
      return;
    }

    // Urutkan sesuai pattern: [position2, position1, position3]
    const sorted = [
      leaderBoards.find((item) => item.position === 2),
      leaderBoards.find((item) => item.position === 1),
      leaderBoards.find((item) => item.position === 3),
    ].filter(Boolean) as iLeaderBoardItem[];

    set({ leaderBoards: sorted });
  },
  addLeaderBoard: (item: iLeaderBoardItem) =>
    set((state) => ({
      leaderBoards: [...state.leaderBoards, item],
    })),
  clearLeaderBoards: () => set({ leaderBoards: [] }),
}));
