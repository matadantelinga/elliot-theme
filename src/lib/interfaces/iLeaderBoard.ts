export interface iLeaderBoardItem {
  position: 1 | 2 | 3;
  avatar: string;
  team: string;
  earning: string;
  prize: string;
  name: string;
  showCrown?: boolean;
}

export interface iLeaderBoardState {
  leaderBoards: iLeaderBoardItem[];
  setLeaderBoards: (leaderBoards: iLeaderBoardItem[]) => void;
  clearLeaderBoards: () => void;
}
