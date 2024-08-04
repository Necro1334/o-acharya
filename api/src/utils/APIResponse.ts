export default class APIResponse {
    status:number;
    message:string;
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
        this.status = status;
        this.message = message;
        this.success = success;
        this.authenticated = authenticated;
        this.data = data;
        this.error = error;
    }


    toJson() {
        return JSON.stringify({
            status: this.status,
            message: this.message,
            success: this.success,
            authenticated: this.authenticated,
            data: this.data,
            error: this.error,
        });
    }
}

