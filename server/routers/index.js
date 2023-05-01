const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const errorHandler = require('../middlewares/errorHandler');
const ebookRouter = require('./ebook');
const userRouter = require('./user');
const annotationRouter = require('./annotation');

router.get('/', (req, res) => {
  res.send('hello world')
});

router.use('/users', userRouter);
router.use('/ebooks', authentication, ebookRouter);
router.use('/annotations', authentication, annotationRouter);
router.use(errorHandler);

module.exports = router;