import { Resolvers } from "../../../types/resolvers";
import { EmailSignInResponse, EmailSignInMutationArgs } from "../../../types/graph";
import User from "../../../entities/User";
import createJWT from "../../../utils/createJWT";


const resolvers: Resolvers = {
    Mutation: {
        EmailSignIn: async (
            _,
            args: EmailSignInMutationArgs
        ): Promise<EmailSignInResponse> => { 
            const { email, password } = args
            try {

                const user = await User.findOne({ email })
                if( !user) {
                    return {
                        ok: false,
                        error: "존재하지 않는 이메일",
                        token: null
                    }
                }
                
                const checkPassword = await user.comparePassword(password);
                if( checkPassword ) {
                    const token = createJWT(user.id)
                    return {
                        ok: true,
                        error: null,
                        token
                    }
                } else {
                    return {
                        ok: false,
                        error: "틀린 비밀번호",
                        token: null
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