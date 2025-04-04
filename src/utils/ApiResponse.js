const successResponse = (
  res,
  data,
  message = "Request successful",
  statusCode = 200
) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const errorResponse = (
  res,
  error,
  message = "Something went wrong",
  statusCode = 500
) => {
  console.error(error);
  res.status(statusCode).json({
    success: false,
    message,
    error: error.message || error,
  });
};

export { successResponse, errorResponse };
