export const typeDefs = ["type Query {\n  sayBaby(name: String!): Seojin!\n  sayHello: String!\n}\n\ntype Seojin {\n  text: String!\n  error: Boolean!\n  iswhat: Int\n}\n"];
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
