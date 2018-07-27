import dotenv from "dotenv"
dotenv.config()

import { createConnection } from "typeorm"
import { Options } from "graphql-yoga";
import app from "./app"
import connectionOptions from "./ormconfig";


const PORT : number | string = process.env.PORT || 4000
const PLAYGROUND : string = "/playground"
const GRAPHQL_ENDPOINT : string = "/graphql"

const appOptions : Options = {
    port: PORT,
    playground: PLAYGROUND,
    endpoint: GRAPHQL_ENDPOINT
}

const checkAppStart = () => console.log(`사용하는 포트 번호 : ${PORT}`)

createConnection(connectionOptions).then(() => {
    app
    .start(appOptions, checkAppStart)
    .catch(error => console.log(error))
})
