export interface IError {
    code: string;
    status: number;
    message: string;
}
export declare class Error {
    error: IError;
    constructor(code: string, status: number, message: string);
    toString(): string;
}
