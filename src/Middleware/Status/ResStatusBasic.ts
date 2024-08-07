import { Response } from 'express';
import { StatusBasicModel } from '../../Types/StatusModel';

//ออกแบบ status ที่ต้องการส่งกลับไป
// Middleware สำหรับจัดการ response ที่สำเร็จ

// Middleware สำหรับจัดการข้อผิดพลาด
export const ResStatusBasic = (res: Response, code: string, message: string, results: any = false) => {
    const errorStatus: StatusBasicModel<typeof results> = {
        code: code,
        message: message,
        results: results
    };


    res.status(parseInt(code)).json(errorStatus);
};
