import { Resolvers } from "../../../types/resolvers";
import { 
    FacebookConnectMutationArgs, 
    FacebookConnectResponse 
} from "../../../types/graph";
import User from "../../../entities/User";

const resolvers: Resolvers = {
    Mutation: {
        FacebookConnect: async (
            _,
            args: FacebookConnectMutationArgs
        ): Promise<FacebookConnectResponse> => {
            const { facebookId } = args;
            try {
              const existingUser = await User.findOne({ facebookId });
              if (existingUser) {
                // const token = createJWT(existingUser.id);
                return {
                  ok: true,
                  error: null,
                  token: ""
                };
              }
            } catch (error) {
              return {
                ok: false,
                error: error.message,
                token: null
              };
            }
            try {
              await User.create({
                ...args,
                profilePhoto: `http://graph.facebook.com/${facebookId}/picture?type=square`
              }).save();
            //   const token = createJWT(newUser.id);
              return {
                ok: true,
                error: null,
                token: ""
              };
            } catch (error) {
              return {
                ok: false,
                error: error.message,
                token: null
              };
            }
          }
        }
      };
      
      export default resolvers;