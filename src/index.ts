import express from "express";
import dotenv from "dotenv"
import cors, { CorsOptions } from 'cors';
import errorHandler from "./Middleware/errorHandlder";
import routes from "./routes/routes";
import { setupSwagger } from "./swager";

dotenv.config()
const app = express()
const port = process.env.PORT || 3000;

// กำหนด options สำหรับ CORS
const corsOptions: CorsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

// ใช้ cors middleware กับ options ที่กำหนด
app.use(cors(corsOptions));
app.use(express.json()); // Middleware สำหรับการแปลง JSON
app.use('/api', routes);
app.use(errorHandler);
setupSwagger(app);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});