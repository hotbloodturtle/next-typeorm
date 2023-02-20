import {AppDataSource} from "@/database/data-source";
const express = require("express");
import next from "next";


const dev = process.env.NODE_ENV != 'production' && !process.env.CLOUDCC_NAMESPACE
const app = next({ dev });
const handle = app.getRequestHandler();
const prepared = app.prepare();

async function nextHandler(req: any, res: any) {
    console.log(`Next: ${req.method} ${req.path}`)
    await AppDataSource;
    await prepared;
    return handle(req, res);
}


const server = express();

server.all('*', nextHandler);

/**
 * @klotho::expose {
 *   id = "NextGateway"
 *   target = "public"
 * }
 */
server.listen(3000, () => console.log("> Ready on http://localhost:3000"));