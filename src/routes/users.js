import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../db/users';

const router = express.Router();

// Register Form POST - new User
router.post('/register', (req, res) => {
  const errors = [];

  if (req.body.password !== req.body.passwordConfirm) {
    errors.push({
      text: 'Password do not match'
    });
  }

  if (req.body.password.length < 6) {
    errors.push({
      text: 'Passwor must be at least 6 characters'
    });
  }

  if (req.body.names.length < 3) {
    errors.push({
      text: 'Enter valid Names'
    });
  }

  if (
    req.body.email.indexOf('@') === -1 ||
    req.body.email.indexOf('.') === -1
  ) {
    errors.push({
      text: 'Enter valid Email'
    });
  }

  if (errors.length > 0) {
    res.send(errors);
  } else {
    const oldUser = User.filter(user => user.email === req.body.email);
    if (oldUser.length > 0) {
      return res.send({
        success: false,
        message: 'Email already registered'
      });
    }
    try {
      const newUser = {
        userId: User.length + 1,
        names: req.body.names,
        email: req.body.email,
        password: req.body.password
      };
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(newUser.password, salt);
      newUser.password = hash;
      User.push(newUser);

      return res.send({
        success: true,
        message: 'User is successfully registered'
      });
    } catch (err) {
      res.send({
        success: false,
        message: `Failed to register, error: ${err} `
      });
    }
  }
  return res.send({
    success: false,
    message: 'User not registered! Please try again'
  });
});

module.exports = router;
