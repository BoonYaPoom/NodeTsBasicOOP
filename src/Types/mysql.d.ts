declare module 'mysql2/promise' {
    interface QueryResult<T> {
        0: T[];
        1: any;
    }
}
