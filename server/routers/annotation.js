const router = require('express').Router();
const AnnotationController = require('../controllers/AnnotationController');

router.post('/', AnnotationController.createAnnotation);
router.get('/', AnnotationController.getAnnotations);
router.get('/:id', AnnotationController.getAnnotation);
router.put('/:id', AnnotationController.updateAnnotation);
router.delete('/:id', AnnotationController.deleteAnnotation);

module.exports = router;
