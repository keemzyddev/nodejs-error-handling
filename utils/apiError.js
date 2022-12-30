const httpStatusCodes = require("./httpStatusCodes");
const BaseError = require("./BaseError");
const errorCodes = require("./errorCodes");

class subError extends BaseError {
  constructor(
    message,
    errorCode = errorCodes.INVALID_SUBSCRIPTION,
    statusCode = httpStatusCodes.BAD_REQUEST,
    isOperational = true
  ) {
    super(errorCode, message, statusCode, isOperational);
  }
}

class api400Error extends BaseError {
  constructor(
    message,
    statusCode = httpStatusCodes.BAD_REQUEST,
    isOperational = true
  ) {
    super(errorCode, message, statusCode, isOperational);
  }
}

class api404Error extends BaseError {
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
  api400Error,
  api404Error,
  subError,
};
