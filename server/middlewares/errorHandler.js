const errorHandler = (err, req, res, next) => {
  console.log(err);

  switch (err.name) {
    case 'EmailPasswordRequired':
      res.status(400).json({ message: 'Email and Password is required' });
      break;
    
    case 'EmailPasswordInvalid':
      res.status(401).json({ message: 'Email or Password is invalid' });
      break;
    
    case 'Unauthenticated':
      res.status(401).json({ message: 'Please login first' });
      break;

    case 'JsonWebTokenError':
      res.status(401).json({ message: 'Invalid Token' });
      break;
  
    default:
      break;
  }
}

module.exports = errorHandler;