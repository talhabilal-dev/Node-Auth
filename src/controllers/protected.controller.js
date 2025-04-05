export const getResponse = (req, res) => {
  res.status(200).json({
    success: true,
    message: "API response successful",
  });
};
