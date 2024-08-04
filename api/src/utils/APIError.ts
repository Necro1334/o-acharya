export default class APIError extends Error {
    status:number;
    success:boolean;
    authenticated:boolean;
    data:string[];
    error:string[];
    constructor(
        status:number = 200,
        message:string = 'API Response successful',
        success:boolean = true,
        authenticated:boolean = false,
        data:string[] = [],
        error:string[]  = [],
    ){
        super(message);
        this.status = status;
        this.success = success;
        this.authenticated = authenticated;
        this.data = data;
        this.error = error;
        Error.captureStackTrace(this, this.constructor);
    }


    toJson() {
        return JSON.stringify({
            status: this.status,
            message: this.message,
            success: this.success,
            authenticated: this.authenticated,
            data: this.data,
            error: this.error,
            stack: this.stack,
        });
    }
}

