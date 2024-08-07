import { Response } from 'express';
import { StatusModel } from '../../Types/StatusModel';
import { ApiResponse } from '../../Types/Response/ApiResponse';


//ออกแบบ status ที่ต้องการส่งกลับไป
// Middleware สำหรับจัดการ response ที่สำเร็จ

// Middleware สำหรับจัดการข้อผิดพลาด
export const ResPayloadStatus = (res: Response, code: string, message: string, service: string, payload: any = false) => {
    const errorStatus: StatusModel = {
        code: code,
        message: message,
        service: service
    };

    const errorResponse: ApiResponse<typeof payload> = {
        status: errorStatus,
        payload: payload
    };

    res.status(parseInt(code)).json(errorResponse);
};
