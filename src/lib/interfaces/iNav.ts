export interface iNavItem {
  label: string;
  url: string;
}

export interface iLeaderBoardsNav {
  image: string;
  type: "csgo" | "rust" | "shuffle";
  active: boolean;
}

export interface iSocialNav extends iNavItem {
  icon: string;
  type: "twitter" | "kick" | "discord";
}
