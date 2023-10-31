import { Router } from "express";
import {
    Newuser,
    getalluser,
    getalluserbyid,
    getalluserbycourse,
    updateSCore,
    Deleteone
} from "../Controller/controller";


const router: Router = Router()

router.route("/create-user").post(Newuser)
router.route("/read-user").get(getalluser)
router.route("/read-user-id/:userID").get(getalluserbyid)
router.route("/read-user-course").get(getalluserbycourse)

router.route("/update-name/:userID").patch(updateSCore)

router.route("/delete-one-user/:userID").delete(Deleteone)
export default router