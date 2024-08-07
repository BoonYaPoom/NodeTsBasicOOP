import { Router } from 'express';
import userRouter from './route/userRouter';


//เซ็ต router 
const routes = Router();

    routes.use('/users',userRouter)

export default routes;
