export const typeDefs = ["type Chat {\n  id: Int!\n  message: [Message]!\n  participants: [User]!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Message {\n  id: Int!\n  text: String!\n  # chatId: Int\n  chat: Chat!\n  user: User!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Query {\n  sayBaby(name: String!): Seojin!\n  sayHello: String!\n}\n\ntype Seojin {\n  text: String!\n  error: Boolean!\n  iswhat: Int\n}\n\ntype FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  FacebookConnect(name: String!, email: String, facebookId: String!): FacebookConnectResponse!\n}\n\ntype User {\n  id: Int!\n  name: String\n  profilePhoto: String\n  email: String\n  verifiedEmail: Boolean!\n  phoneNumber: String\n  verifiedPhoneNumber: Boolean!\n  password: String\n  verification: [Verification]\n  facebookId: String\n  chat: Chat\n  message: [Message]\n  createAt: String!\n  updateAt: String\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  user: User!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBaby: Seojin;
  sayHello: string;
}

export interface SayBabyQueryArgs {
  name: string;
}

export interface Seojin {
  text: string;
  error: boolean;
  iswhat: number | null;
}

export interface Mutation {
  FacebookConnect: FacebookConnectResponse;
}

export interface FacebookConnectMutationArgs {
  name: string;
  email: string | null;
  facebookId: string;
}

export interface FacebookConnectResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface Chat {
  id: number;
  message: Array<Message>;
  participants: Array<User>;
  createdAt: string;
  updatedAt: string | null;
}

export interface Message {
  id: number;
  text: string;
  chat: Chat;
  user: User;
  createdAt: string;
  updatedAt: string | null;
}

export interface User {
  id: number;
  name: string | null;
  profilePhoto: string | null;
  email: string | null;
  verifiedEmail: boolean;
  phoneNumber: string | null;
  verifiedPhoneNumber: boolean;
  password: string | null;
  verification: Array<Verification> | null;
  facebookId: string | null;
  chat: Chat | null;
  message: Array<Message> | null;
  createAt: string;
  updateAt: string | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  used: boolean;
  user: User;
  createdAt: string;
  updatedAt: string;
}
