import express, { Application, Response, Request } from "express"
import { statuscode } from "../Util/statuscode"
import { client, db } from "../Util/dbconfig"
import { PortalModel } from "../Util/PortalModel"

import { ObjectId } from "mongodb"


export const Newuser = async (req: Request, res: Response) => {

    try {
        await client.connect()

        const { name, course, score } = req.body

        const Newuser = new PortalModel(
            name,
            score,
            course,

        )
        await db.insertOne(Newuser)

        return res.status(statuscode.created).json({
            message: "created successfully",
            data: Newuser
        })
    } catch (error: any) {
        return res.status(statuscode.bad).json({
            message: error.message,
            data: error.messasge


        })
    }
}

export const getalluserbyid = async (req: Request, res: Response) => {

    try {
        await client.connect()

        const { userID } = req.params

        const oneuser = await db.findOne({ _id: new ObjectId(userID) })

        return res.status(statuscode.created).json({
            message: "gotten successfully by id",
            data: oneuser
        })
    } catch (error: any) {
        return res.status(statuscode.bad).json({
            message: error.message,
            data: error.messasge


        })
    }
}



export const getalluser = async (req: Request, res: Response) => {

    try {
        await client.connect()

        const Allusers = await db.find().toArray()

        return res.status(statuscode.created).json({
            message: "gotten successfully all user",
            data: Allusers
        })
    } catch (error: any) {
        return res.status(statuscode.bad).json({
            message: error.message,
            data: error.messasge


        })
    }
}

export const getalluserbycourse = async (req: Request, res: Response) => {

    try {
        await client.connect()
        const { course } = req.body

        const Oneuserbycategory = await db.find({ course }).toArray()

        return res.status(statuscode.created).json({
            message: "gotten successfully by course ",
            data: Oneuserbycategory
        })
    } catch (error: any) {
        return res.status(statuscode.bad).json({
            message: error.message,
            data: error.messasge


        })
    }
}





export const updateSCore = async (req: Request, res: Response) => {

    try {
        await client.connect()
        const { name } = req.body
        const { userID } = req.params

        const updateone = await db.updateOne({
            _id: new ObjectId(userID)
        },
            { $set: { name } }
        )


        return res.status(statuscode.created).json({
            message: "name update successfully  ",
            data: updateone
        })
    } catch (error: any) {
        return res.status(statuscode.bad).json({
            message: error.message,
            data: error.messasge


        })
    }
}


export const Deleteone = async (req: Request, res: Response) => {

    try {
        await client.connect()

        const { userID } = req.params

        const deleteone = await db.deleteOne({ _id: new ObjectId(userID) })


        return res.status(statuscode.created).json({
            message: "user deleted successfully",
            data: deleteone
        })
    } catch (error: any) {
        return res.status(statuscode.bad).json({
            message: error.message,
            data: error.messasge


        })
    }
}
