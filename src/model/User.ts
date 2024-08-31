export interface User {
  name: string;
  email: string;
  nickname?: string;
  avatarUrl?: string;
  userType?: string;
  userTypeUrl?: string;
  pushYN?: boolean;
  isMember?: boolean;
}
