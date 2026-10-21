import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN, //Yeh server ko bata raha hai ki kaunsi website ya URL ko hamare backend se data lene ki permission hai.
    credentials: true// By default, cross-origin requests mein browsers Cookies ya Authorization headers nahi bhejte. Agar aap isko true set karte hain, toh iska matlab hai aap server ko bol rahe hain: "Bhai, agar frontend se koi cookie ya token aa raha hai (jaise user ka login session ya JWT), toh usko aane do aur accept kar lo."
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export {app}