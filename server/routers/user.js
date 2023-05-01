const router = require('express').Router();
const UserController = require('../controllers/UserController');
const authentication = require('../middlewares/authentication');

router.get("/", authentication, UserController.getUserDetail);
router.post("/login", UserController.login);

module.exports = router;