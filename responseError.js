class ResponseError extends Error {
    constructor(statusCode, message){
        super(message)
        this.statusCode = statusCode;
        // this.headers = headers;
    }
}

export default ResponseError;
