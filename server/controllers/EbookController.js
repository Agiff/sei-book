const fs = require('fs');

class EbookController {
  static async upload(req, res, next) {
    try {
      console.log(req.file);
      const filePath = req.file.path;
      res.send("File uploaded successfully");
    } catch (error) {
      next(error);
    }
  }

  static async download(req, res, next) {
    try {
      const filePath = "public/uploads/8af40ba1-e679-4cc0-869b-727feffe2552.pdf";
      const stream = fs.createReadStream(filePath);
      res.setHeader("Content-disposition", "attachment; filename=dummy-ebook.pdf");
      res.setHeader("Content-type", "application/pdf");
      stream.pipe(res);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = EbookController;