import { Seojin, SayBabyQueryArgs } from "../../../types/graph";

const resolvers = {
    Query: {
        sayBaby: (_, args: SayBabyQueryArgs): Seojin => {
            return {
                text: `${args.name}이/가 테스팅하는중 `,
                error: true,
                iswhat: 26
            }
        }
    }
}

export default resolvers