import { ObjectId } from "mongodb"

export class PortalModel {
    _id: ObjectId
    name: string
    course: Array<string>
    score: number


    constructor(name: string, course: Array<string>, score: number) {
        this._id = new ObjectId
        this.name = name
        this.course = course
        this.score = score
    }
}