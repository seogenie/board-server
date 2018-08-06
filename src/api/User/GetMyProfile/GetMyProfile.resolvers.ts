import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
    Query: {
        GetMyProfile: privateResolver( async(_, __, { req }) => {
            const { user } = req
            return {
                ok: true,
                user,
                error: null
            }
        })
    }
}

export default resolvers