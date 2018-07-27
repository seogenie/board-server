export const typeDefs = ["type Query {\n  sayBaby(name: String!): Seojin!\n  sayHello: String!\n}\n\ntype Seojin {\n  text: String!\n  error: Boolean!\n  iswhat: Int\n}\n\ntype User {\n  id: Int!\n  name: String\n  profilePhoto: String\n  email: String\n  verifiedEmail: Boolean!\n  phoneNumber: String\n  verifiedPhoneNumber: Boolean!\n  password: String\n  createAt: String!\n  updateAt: String\n}\n"];
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

export interface User {
  id: number;
  name: string | null;
  profilePhoto: string | null;
  email: string | null;
  verifiedEmail: boolean;
  phoneNumber: string | null;
  verifiedPhoneNumber: boolean;
  password: string | null;
  createAt: string;
  updateAt: string | null;
}
