class BaseError extends Error {
  constructor(errorCode, message, statusCode, isOperational) {
    super(message);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
  }
}

module.exports = BaseError;
