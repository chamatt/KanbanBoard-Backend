import express from "express";
import bodyParser from "body-parser"
import cors from "cors";
import router from "./routes";

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


app.use(router)

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server listening at port ${process.env.PORT || 3333}`);
})
