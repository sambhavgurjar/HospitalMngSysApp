const multer = require("multer");
const path = require("path");
const fs = require("fs");

let fileHandler = (pathDir) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      let fullPath = path.resolve(__dirname, `../uploads/${pathDir}`);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
      cb(null, fullPath);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
// console.log(storage);

  const upload = multer({
    storage: storage,
  });

  return upload;
};

module.exports = fileHandler;
