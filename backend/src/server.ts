import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const port = process.env.PORT ?? 8000;

async function start() {
    await connectDB();

    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    });
}

start().catch((error) => {
    console.error("Failed to start server:", error.message);
    process.exit(1);
});
