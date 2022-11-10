// import dependencies
const express = require("express")
const cors = require("cors")

// instantiate express
const app = express()
const PORT = 8000

// set up middleware
require("./config/mongoose.config")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const PirateRoutes = require("./routes/Pirate.routes")
PirateRoutes(app)

app.listen(PORT, () => console.log(`EXPRESS RUNNING ON PORT ${PORT}`))