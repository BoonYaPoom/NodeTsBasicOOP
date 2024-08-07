import { Request, Response } from "express";
import User from "../Models/UserModel";
import { ResStatusBasic } from "../Middleware/Status/ResStatusBasic";


export const AllUsers = async (req: Request, res: Response) => {
    try {
        const results = await User.getAlluser()
        return ResStatusBasic(res, '200', 'Success AllUsers', results)
    } catch (error: any) {
        return ResStatusBasic(res, '500', error.message || 'Server Error', false)
    }
}


export const UserById = async (req: Request, res: Response) => {
    //user/1
    // const { id } = req.params;
    // const id_int = parseInt(id)

    //user?id=1
    const { id } = req.query;
    const idint = parseInt(id as string);

    try {
        const results = await User.getUserById(idint)
        return ResStatusBasic(res, '200', 'Success AllUsers', results)
    } catch (error: any) {
        return ResStatusBasic(res, '500', error.message || 'Server Error', false)
    }
}

export const CreateUser = async (req: Request, res: Response) => {

    const { username, password, status } = req.body;
    if (!username && !password && !status) {
        return ResStatusBasic(res, '400', "ข้อมูลไม่ถูกส่งมา" || 'No Data', false)
    }
    try {
        const results = await User.createUser(username, password, status)
        return ResStatusBasic(res, '200', 'Success Create', results)
    } catch (error: any) {
        return ResStatusBasic(res, '500', error.message || 'Server Error', false)
    }
}