import {Router} from "express"
import {loginUser, registerUser,logoutUser, refreshAccessToken} from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middlewares.js"
import {upload} from "../middlewares/multer.middleware.js"
const router = Router()

router.route("/register").post(

    //! middleware chaiye to likhna padega, yahan file upload hoga, phir wo uploaded file controllers ke pas jayega for further operations
    upload.fields([
        {name: "avatar",
            maxCount: 1
        },
        {name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)

    router.route("/login").post(loginUser)

    router.route("/logout").post(verifyJWT, logoutUser) //todo: (middleware, method)
    //? next iseliye use hota hai taki confusion na ho ki pehla verifyJWT ke bd kya karna hai? next bolta hai ki next middleware ko chale jao yani-> logoutUser

    router.route("/refreshAccessToken").post(refreshAccessToken)

export default router