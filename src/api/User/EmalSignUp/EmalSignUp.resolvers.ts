import { Resolvers } from "../../../types/resolvers";
import { EmailSignInMutationArgs, EmailSignInResponse } from "../../../types/graph";
import User from "../../../entities/User";
import createJWT from "../../../utils/createJWT";

const resolvers: Resolvers = {
    Mutation: { 
        EmailSignUp: async(
            _,
            args: EmailSignInMutationArgs
        ): Promise<EmailSignInResponse> => {
            const { email } = args
            try {
                const existingUser = await User.findOne({ email })
                if ( existingUser ) {
                    return {
                        ok: false,
                        error: "이미 가입되어있는 회원 입니다. 로그인해주세요",
                        token: null
                    }
                } else {
                    const newUser = await User.create({ ...args }).save()
                    const token = createJWT(newUser.id)
                    return {
                        ok: true,
                        token,
                        error: null
                    }
                }
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    token: null
                }
            }
        }
    }
}

export default resolvers