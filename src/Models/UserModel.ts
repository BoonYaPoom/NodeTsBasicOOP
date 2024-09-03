import { AppDataSource } from "../db/database";
import { User } from "../entity/User";


class UserService {
    private static _userRepository = AppDataSource.getRepository(User);
    public static get userRepository() {
        return UserService._userRepository;
    }
    public static set userRepository(value) {
        UserService._userRepository = value;
    }

    public static async getAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    public static async getUserById(id: number): Promise<User | null> {
        return await this.userRepository.findOneBy({ id });
    }

    public static async createUser(username: string, password: string, status: number): Promise<User> {
        const newUser = this.userRepository.create({ username, password, status });
        return await this.userRepository.save(newUser);
    }
}

export default UserService;
