const router = require('express').Router();
const {
  createUser,
  login,
} = require('../controllers/user');

const { validateCreateUser, validateLogin } = require('../middlewares/validations');

router.post('/signup', validateCreateUser, createUser);
router.post('/signin', validateLogin, login);

module.exports = router;
