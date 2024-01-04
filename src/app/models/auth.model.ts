export interface User {
  id: number;
  name: string;
  type: string;
}

export interface UserLogged {
  user: User;
  token: string;
}
