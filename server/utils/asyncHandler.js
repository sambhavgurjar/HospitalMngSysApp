//handler  async functions error

const asyncHandler = (fn) => {
  return function (req, res, next) {
    fn(req, res, next).catch((error) => {
      console.error("asyncHandler Error:-", error);
      next(error);
    });
  };
};

module.exports = asyncHandler;
