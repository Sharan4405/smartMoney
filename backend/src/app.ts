import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import contactRouter from './routes/contact.routes.js';
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.get("/api/health", (_req: Request, res: Response) => {
    res.status(200).send({message: "backend is running"});
});

app.use("/api/contact", contactRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
