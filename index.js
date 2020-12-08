const server = require("./api/server")
// const wakeUpDyno = require('./wokeDyno.js')


const port = process.env.PORT || 5000
server.listen(port, () => {
    // wakeUpDyno(DYNO_URL)
    console.log(`--server running on port ${port}`)
})