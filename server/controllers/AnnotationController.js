const { Annotation } = require('../models');

class AnnotationController {
  static async createAnnotation(req, res, next) {
    try {
      const { data, EbookId } = req.body;
  
      const annotation = await Annotation.create({
        data,
        EbookId
      });
  
      res.status(201).json(annotation);
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

  
  static async updateAnnotation(req, res, next) {
    try {
      const { id } = req.params;
      const { data, EbookId } = req.body;
  
      const annotation = await Annotation.findByPk(id);
      if (!annotation) throw { name: 'NotFound' };
  
      annotation.data = data;
      annotation.EbookId = EbookId;
      await annotation.save();
  
      res.status(200).json(annotation);
    } catch (error) {
      next(error);
    }
  }
  
  static async deleteAnnotation(req, res, next) {
    try {
      const { id } = req.params;
  
      const annotation = await Annotation.findByPk(id);
      if (!annotation) throw { name: 'NotFound' };
  
      await annotation.destroy();
  
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AnnotationController;