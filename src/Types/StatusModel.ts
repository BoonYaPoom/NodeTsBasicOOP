export interface StatusModel {
    code: string;
    message: string;
    service: string;
}


export interface StatusBasicModel<T> {
    code: string;
    message: string;
    results: T;
}
