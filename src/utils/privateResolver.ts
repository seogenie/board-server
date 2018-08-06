const privateResolver = (resolverFunction) => async (
    parent, 
    args, 
    context,
    info) => {
    if( !context.req.user ){
        throw new Error("토큰이 없거나 유효하지 않아 요청을 무시합니다.")
    }
    const resolved = await resolverFunction(parent, args, context, info)
    return resolved
}

export default privateResolver