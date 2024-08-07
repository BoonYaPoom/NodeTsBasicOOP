import { Router } from 'express';
import { AllUsers, CreateUser, UserById } from '../../Controllers/UserController';


const userRouter = Router();
//กำหนดเส้นทาง sub router
userRouter.get('/usersall', AllUsers)
userRouter.get('/user', UserById)
userRouter.post('/create', CreateUser)
export default userRouter;

/**
 * @swagger
 * /api/users/usersall:
 *   get:
 *     summary: Retrieve all users
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                       example: '500'
 *                     message:
 *                       type: string
 *                       example: 'Server Error'
 *                     service:
 *                       type: string
 *                       example: 'UserService'
 *                 payload:
 *                   type: boolean
 *                   example: false
 */
/**
 * @swagger
 * /api/users/user:
 *   get:
 *     summary: Retrieve a user by ID
 *     description: Fetch user details based on the provided user ID.
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user to retrieve
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
*       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                       example: '400'
 *                     message:
 *                       type: string
 *                       example: 'No Data'
 *                     service:
 *                       type: string
 *                       example: 'UserService'
 *                 payload:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                       example: '500'
 *                     message:
 *                       type: string
 *                       example: 'Server Error'
 *                     service:
 *                       type: string
 *                       example: 'UserService'
 *                 payload:
 *                   type: boolean
 *                   example: false
 */

/**
 * @swagger
 * /api/users/create:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: 'john_doe'
 *               password:
 *                 type: string
 *                 example: 'password123'
 *               status:
 *                 type: string
 *                 example: 'active'
 *             required:
 *               - username
 *               - password
 *               - status
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                       example: '200'
 *                     message:
 *                       type: string
 *                       example: 'Success Create'
 *                     service:
 *                       type: string
 *                       example: 'UserService'
 *                 payload:
 *                   type: object
 *                   properties:
 *                     insertId:
 *                       type: integer
 *                       example: 1
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                       example: '400'
 *                     message:
 *                       type: string
 *                       example: 'No Data'
 *                     service:
 *                       type: string
 *                       example: 'UserService'
 *                 payload:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                       example: '500'
 *                     message:
 *                       type: string
 *                       example: 'Server Error'
 *                     service:
 *                       type: string
 *                       example: 'UserService'
 *                 payload:
 *                   type: boolean
 *                   example: false
 */