import { Options } from "graphql-yoga";
import app from "./app"

const PORT : number | string = process.env.PORT || 4000
const PLAYGROUND : string = "/playground"
const GRAPHQL_ENDPOINT : string = "/graphql"

const appOptions : Options = {
    port: PORT,
    playground: PLAYGROUND,
    endpoint: GRAPHQL_ENDPOINT
}

const checkAppStart = () => console.log(`사용하는 포트 번호 : ${PORT}`)

app.start(appOptions, checkAppStart)