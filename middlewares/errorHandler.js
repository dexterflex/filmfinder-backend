export class ApplicationError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}

const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    res.status(status).send({ success: false, message });
};

export default errorHandler;
