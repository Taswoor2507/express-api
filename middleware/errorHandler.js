import constants from "../constants.js";
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "validation error",
        error: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.UNAUTHORIZE:
      res.json({
        title: "Unauthorize!",
        error: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found!",
        error: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "forbidden",
        error: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server error ",
        error: err.message,
        stackTrace: err.stack,
      });
    default:
      res.json({
        title: "Server error ",
        error: err.message,
        stackTrace: err.stack,
      });
  }
};

export default errorHandler;
