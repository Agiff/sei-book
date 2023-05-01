const router = require('express').Router();
const AnnotationController = require('../controllers/AnnotationController');

router.post('/', AnnotationController.createAnnotation);
router.get('/', AnnotationController.getAnnotations);
router.get('/:id', AnnotationController.getAnnotation);

module.exports = router;
