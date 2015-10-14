## sensor client

Install

    npm install sensor-client

Use

    var Client = require("sensor-client")

    Client("http://localhost:5080/event").send({ "type": "temperature",  "location": "testroom", "value": 20 })
