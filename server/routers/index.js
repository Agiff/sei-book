const router = require('express').Router();
const ebookRouter = require('./ebook');

router.get('/', (req, res) => {
  res.send('hello world')
});

router.use('/ebook', ebookRouter);

module.exports = router;