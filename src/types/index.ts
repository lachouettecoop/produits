export type User = {
  name: string;
  role: Role;
};

export enum Role {
  Admin,
  Client,
  Preparer,
}
