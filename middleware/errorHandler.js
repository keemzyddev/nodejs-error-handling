const { subError, api400Error } = require("../utils/apiError");
const httpStatusCodes = require("../utils/httpStatusCodes");

const errorHandler = (error, req, res, next) => {
  if (error.name === "ValidationError") {
    return res.status(400).json({
      type: "ValidationError",
      details: error.details,
    });
  }

  if (error instanceof subError) {
    return res.status(error.statusCode).json({
      message: error.message,
      erroCode: error.errorCode,
      status: error.statusCode,
      isOperational: error.isOperational,
    });
  }

  if (error instanceof api400Error) {
    return res.status(error.statusCode).json({
      message: error.message,
      status: error.statusCode,
      isOperational: error.isOperational,
    });
  }

  return res
    .status(httpStatusCodes.INTERNAL_SERVER)
    .json("Something went wrong");
};

module.exports = errorHandler;
