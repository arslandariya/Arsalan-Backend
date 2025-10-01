class ApieError extends Error {
    constructor(
        statuscode,
        message = "Something went Wrong",
        errors = [],
        statck = ""
    ) {
        super(message)
        this.statuscode = statuscode
        this.data = null
        this.message = message
        this.succes = false;
        this.errors = errors
        if (statck) {
            this.stack = statck
        }
        else {
            Error.captureStackTrace(this, this.constructor)
        }
    }


}
export {ApieError}
//this . data fill me hota kiya kiya ha ? 