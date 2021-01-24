const server = require("./api/server")
const wakeUpDyno = require('./wokeDyno.js')


const port = process.env.PORT || 5000

const DYNO_URL = "https://readit-backend.herokuapp.com/"

server.listen(port, () => {
    // wakeUpDyno(DYNO_URL)
    console.log(`--server running on port ${port}`)
})