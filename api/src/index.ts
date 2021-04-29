/**
 * Required External Modules
 */

import * as dotenv from "dotenv";

import express from "express";

import cors from "cors"

import helmet from "helmet";

import * as names from "../mock-data/names.json";

dotenv.config();
/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
/**
 *  App Configuration
 */

app.use(helmet());

app.use(cors());

app.use(express.json());

/**
 * Routes
 */

 app.get('/', (req, res) => {
     console.log(req.params);
     res.send("This is just a simple flutter backend trial.");
 });

 app.get('/contacts', (req, res) => {
     res.json(names);
 })
 
/**
 * Server Activation
 */

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

