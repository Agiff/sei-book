const { Annotation } = require('../models');

class AnnotationController {
  static async createAnnotation(req, res, next) {
    try {
      const { data, EbookId } = req.body;
  
      const existingAnnotation = await Annotation.findOne({
        where: {
          EbookId
        }
      });
  
      if (existingAnnotation) {
        existingAnnotation.data = data;
        await existingAnnotation.save();
        res.status(200).json(existingAnnotation);
      } else {
        const annotation = await Annotation.create({
          data,
          EbookId
        });
        res.status(201).json(annotation);
      }
    } catch (error) {
      next(error);
    }
  }
  
  static async getAnnotations(req, res, next) {
    try {
      const annotations = await Annotation.findAll();
      res.status(200).json(annotations);
    } catch (error) {
      next(error);
    }
  }

  static async getAnnotation(req, res, next) {
    try {
      const { id } = req.params;
  
      const annotation = await Annotation.findByPk(id);
      if (!annotation) throw { name: 'NotFound' };
  
      res.status(200).json(annotation);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AnnotationController;