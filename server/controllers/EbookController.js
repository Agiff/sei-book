const fs = require('fs');
const { Ebook, Annotation } = require('../models');

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
      const { id } = req.params;

      const currentEbook = await Ebook.findByPk(id);
      if (!currentEbook) throw { name: 'NotFound' };

      const stream = fs.createReadStream(currentEbook.path);
      res.setHeader('Content-disposition', `attachment; filename=${currentEbook.originalName.split(' ').join('_')}`);
      res.setHeader('Content-type', 'application/pdf');
      stream.pipe(res);
    } catch (error) {
      next(error);
    }
  }

  static async getEbook(req, res, next) {
    try {
      const ebook = await Ebook.findAll({ where: { UserId: req.user.id } });
      res.status(200).json(ebook);
    } catch (error) {
      next(error);
    }
  }

  static async getEbookDetail(req, res, next) {
    try {
      const { id } = req.params;

      const ebook = await Ebook.findByPk(id, {
        include: [Annotation]
      });
      res.status(200).json(ebook);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = EbookController;