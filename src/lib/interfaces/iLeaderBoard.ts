export interface iLeaderBoardItem {
  position: 1 | 2 | 3;
  avatar: string;
  team: string;
  earning: string;
  prize: string;
  name: string;
}

export interface iLeaderBoardState {
  leaderBoards: iLeaderBoardItem[];
  setLeaderBoards: (leaderBoards: iLeaderBoardItem[]) => void;
  clearLeaderBoards: () => void;
}
