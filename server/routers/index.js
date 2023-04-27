const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const errorHandler = require('../middlewares/errorHandler');
const ebookRouter = require('./ebook');
const userRouter = require('./user');

router.get('/', (req, res) => {
  res.send('hello world')
});

router.use('/users', userRouter);
router.use('/ebooks', authentication, ebookRouter);
router.use(errorHandler);

module.exports = router;