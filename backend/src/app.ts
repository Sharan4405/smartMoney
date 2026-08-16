import express from 'express';
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import cors from 'cors';
import contactRouter from './routes/contact.routes.js';

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN ?? 'http://localhost:3000' }));
app.use(express.json());

app.get("/api/health", (_req: Request, res: Response) => {
    res.status(200).send({message: "backend is running"});
});

app.use("/api/contact", contactRouter);

app.use((_req: Request, res: Response) => {
    res.status(404).json({ message: "Not found" });
});

const errorHandler: ErrorRequestHandler = (err, _req, res, _next: NextFunction) => {
    console.error(err);
    res.status(500).json({ message: "Something went wrong." });
};

app.use(errorHandler);

export default app;
