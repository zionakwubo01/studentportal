import express, { Application } from "express";
import { client } from "./Util/dbconfig";
import { Mainapp } from "./Mainapp";
const port: number = 4545

export const app: Application = express()
app.use(express.json())
client;
Mainapp(app)

const server = app.listen(port, () => {
    console.log(" server id up and running with port", port)
})


process.on("uncaughtException", (error: Error) => {
    console.log(error)
    process.exit(1)

})

process.on("unhandledRejection", (reason: any) => {
    console.log(reason)
    server.close(() => {
        process.exit(1)

    })
}) 