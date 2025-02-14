const errorToString = (error) => {
  return error instanceof Error ? error : JSON.stringify(error);
};

module.exports = {
  errorToString
};
