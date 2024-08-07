import { Router } from 'express';
import { AllUsers, UserById } from '../../Controllers/UserController';


const userRouter = Router();
//กำหนดเส้นทาง sub router
userRouter.get('/usersall', AllUsers)
userRouter.get('/user', UserById)   
export default userRouter;
