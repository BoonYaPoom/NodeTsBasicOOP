import { Request, Response, NextFunction } from 'express';

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack); // แสดงข้อผิดพลาดในคอนโซลสำหรับการดีบัก
    res.status(500).send('Something broke!'); // ส่งข้อความแสดงข้อผิดพลาดให้กับผู้ใช้
}

export default errorHandler;