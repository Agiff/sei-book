const fs = require('fs');
const { Ebook } = require('../models');

class EbookController {
  static async upload(req, res, next) {
    try {
      const file = req.file;
      if (!file) throw { name: 'NoFile' };

      const ebook = await Ebook.create({
        originalName: file.originalname,
        fileName: file.filename,
        path: file.path,
        size: file.size,
        UserId: req.user.id
      });

      res.status(201).json({ message: `File ${ebook.originalName} uploaded successfully` })
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