import { AppDataSource } from "../db/database";
import { Users } from "../entity/User";


class UserService {
    private static _userRepository = AppDataSource.getRepository(Users);

    public static async getAllUsers(): Promise<Users[]> {
        return await this._userRepository.find();
    }

    public static async getUserById(id: number): Promise<Users | null> {
        return await this._userRepository.findOneBy({ id });
    }

    public static async createUser(username: string, password: string, status: number): Promise<Users> {
        const newUser = this._userRepository.create({ username, password, status });
        return await this._userRepository.save(newUser);
    }
}

export default UserService;
