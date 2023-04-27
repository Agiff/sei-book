const router = require('express').Router();
const errorHandler = require('../middlewares/errorHandler');
const ebookRouter = require('./ebook');
const userRouter = require('./user');

router.get('/', (req, res) => {
  res.send('hello world')
});

router.use('/ebooks', ebookRouter);
router.use('/users', userRouter);
router.use(errorHandler);

module.exports = router;