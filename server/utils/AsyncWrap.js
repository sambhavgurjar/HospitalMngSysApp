//handler  async functions error

const AsyncWrap = (fn) => {
  return function (req, res, next) {
    fn(req, res, next).catch((error) => {
      console.error("AsyncWrap Error:-", error);
      next(error);
    });
  };
};

module.exports = AsyncWrap;
