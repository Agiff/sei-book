require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require('fs');
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

app.get('/', (req, res) => {
  res.send('hello world')
});

app.post("/ebook/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  const filePath = req.file.path;
  res.send("File uploaded successfully");
});

app.get("/ebook/download/", (req, res) => {
  const filePath = "public/uploads/767f97c2-e657-4d4b-af62-72097d85e72a.pdf";
  const stream = fs.createReadStream(filePath);
  res.setHeader("Content-disposition", "attachment; filename=dummy-ebook.pdf");
  res.setHeader("Content-type", "application/pdf");
  stream.pipe(res);
});

app.listen(PORT, () => {
  console.log('App is running on PORT', PORT);
});