const router = require('express').Router();
const EbookController = require('../controllers/EbookController');
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: (req, file, cb) => {
    const fileName = uuidv4() + path.extname(file.originalname);
    cb(null, fileName);
  },
})

const upload = multer({ storage });

router.post("/upload", upload.single("file"), EbookController.upload);
router.get("/download/", EbookController.download);

module.exports = router;