import express from 'express';
import { Request,Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors({ origin: "*"}));

app.get("/api/health", (req: Request ,res: Response) => {
    res.status(200).send({message: "backend is running"});
});

export default app;