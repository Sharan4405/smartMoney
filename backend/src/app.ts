import express from 'express';
import { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import contactRouter from './routes/contact.routes.js';
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { connectDB } from './config/db.js';

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.get("/api/health", (_req: Request, res: Response) => {
    res.status(200).send({message: "backend is running"});
});

app.use(async (_req: Request, _res: Response, next: NextFunction) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        next(error);
    }
});

app.use("/api/contact", contactRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
