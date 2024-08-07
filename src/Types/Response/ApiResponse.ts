import { StatusModel } from "../StatusModel";

export interface ApiResponse<T> {
    status: StatusModel;
    payload: T;
}