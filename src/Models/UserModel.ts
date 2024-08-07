import { UserResponse } from "../Types/Response/UserResponse";

class User {

    // สร้างข้อมูลแบบเป็น  array UserResponse[] กำหนดtypeชุดข้อมูล และ [] กำหนดให้เป็น array ด้านใน เป็น ชุด object
    private static users: UserResponse[] = [
        { id: 1, username: 'Alice', password: 'password123', status: 1 },
        { id: 2, username: 'Bob', password: 'password456', status: 0 },
    ]

    // ฟังก์ชันดึงข้อมูลทั้งหมด
    public static getAlluser(): UserResponse[] {
        return this.users
    }

    // ฟังก์ชันดึงข้อมูลตาม ID
    public static getUserById(id: number): UserResponse | undefined {
        return this.users.find(user => user.id === id);
    }

    // ฟังก์ชันเพิ่มผู้ใช้ใหม่
    public static createUser(username: string, password: string, status: number): UserResponse {
        const newUser: UserResponse = {
            id: this.users.length + 1, // กำหนด ID ใหม่
            username,
            password,
            status
        };
        this.users.push(newUser);
        return newUser;
    }

}
export default User;