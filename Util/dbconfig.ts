

import { Application } from "express";
import { MongoClient } from "mongodb";

const URL: string = "mongodb://127.0.0.1:27017"


export const client = new MongoClient(URL)

const mainCollection = async () => {
    try {

        await client.connect()

        return " database is active and running"

    } catch (error) {
        console.log(error)
    }
}

mainCollection()
    .then((res) => {
        console.log(
            res
        )
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        client.close()
    })

export const db = client.db("Portal").collection("students")