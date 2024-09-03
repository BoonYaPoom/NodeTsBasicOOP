import { Request, Response } from "express";
import { ResStatusBasic } from "../Middleware/Status/ResStatusBasic";
import UserService from "../Models/UserModel";

export const AllUsers = async (req: Request, res: Response) => {
    try {
        const results = await UserService.getAllUsers();
        return ResStatusBasic(res, '200', 'Success AllUsers', results);
    } catch (error: any) {
        return ResStatusBasic(res, '500', error.message || 'Server Error', false);
    }
};

export const UserById = async (req: Request, res: Response) => {
    const { id } = req.query;
    const idint = parseInt(id as string);

    try {
        const results = await UserService.getUserById(idint);
        if (!results) {
            return ResStatusBasic(res, '404', 'User Not Found', false);
        }
        return ResStatusBasic(res, '200', 'Success UserById', results);
    } catch (error: any) {
        return ResStatusBasic(res, '500', error.message || 'Server Error', false);
    }
};

export const CreateUser = async (req: Request, res: Response) => {
    const { username, password, status } = req.body;
    if (!username || !password || status === undefined) {
        return ResStatusBasic(res, '400', 'ข้อมูลไม่ถูกส่งมา', false);
    }
    try {
        const results = await UserService.createUser(username, password, status);
        return ResStatusBasic(res, '200', 'Success Create', results);
    } catch (error: any) {
        return ResStatusBasic(res, '500', error.message || 'Server Error', false);
    }
};
