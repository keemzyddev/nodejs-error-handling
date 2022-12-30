const httpStatusCodes = require("./httpStatusCodes");
const BaseError = require("./BaseError");
const errorCodes = require("./errorCodes");

class SubError extends BaseError {
  constructor(
    message,
    errorCode = errorCodes.INVALID_SUBSCRIPTION,
    statusCode = httpStatusCodes.BAD_REQUEST,
    isOperational = true
  ) {
    super(errorCode, message, statusCode, isOperational);
  }
}

class Api400Error extends BaseError {
  constructor(
    message,
    statusCode = httpStatusCodes.BAD_REQUEST,
    isOperational = true
  ) {
    super(errorCode, message, statusCode, isOperational);
  }
}

class Api404Error extends BaseError {
  constructor(
    message,
    errorCode,
    statusCode = httpStatusCodes.NOT_FOUND,
    isOperational = true
  ) {
    super(errorCode, message, statusCode, isOperational);
  }
}

module.exports = {
  Api400Error,
  Api404Error,
  SubError,
};
