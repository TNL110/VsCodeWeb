const express = require('express')
const app = express()

const PORT = 5500

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))

app.use(express.static('public'))