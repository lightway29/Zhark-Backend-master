export interface IError {
  code: string;
  status: number;
  message: string;
}

export class Error {
  public error: IError;

  public constructor(code: string, status: number, message: string) {
    this.error = {
      code: code,
      status: status,
      message: message
    };
  }

  public toString(): string {
    return JSON.stringify(this.error);
  }
}
