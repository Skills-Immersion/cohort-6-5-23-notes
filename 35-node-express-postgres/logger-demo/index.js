const express = require("express")
const app = express()
const input1 = Number(process.argv[2]);
const input2 = Number(process.argv[3]);
const { LOG_LEVEL = "error" } = process.env;

const pinoHttp = require("pino-http")
const loggerMiddleware = pinoHttp({
    level: LOG_LEVEL,
})

app.use(loggerMiddleware);

app.get("/sum/:num1/:num2", (req, res, _next) => {
    const methodName = "sum";
    const left = Number(req.params.num1);
    const right = Number(req.params.num2);

    req.log.debug({__filename, methodName, params: {num1:left, num2: right}})

    const result = left + right

    req.log.error({__filename, methodName, params: {num1:left, num2: right}})

    res.json({data: result})
}) 

app.listen(9000, () => console.log("its over 9000"))
