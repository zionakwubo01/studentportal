import express, { Application, Response, Request } from "express"

import portal from "./router/router"
import { statuscode } from "./Util/statuscode"



export const Mainapp = (app: Application) => {
    app.use("/Api/v1/", portal)


    app.get("/", (req: Request, res: Response) => {
        try {

            return res.status(statuscode.ok).json({
                message: "welcome to my landing page"
            })

        } catch (error) {
            return res.status(statuscode.bad).json({
                message: "erroe while getting "
            })
        }
    })
}