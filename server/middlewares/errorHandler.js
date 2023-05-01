const errorHandler = (err, req, res, next) => {
  console.log(err);

  switch (err.name) {
    case 'EmailPasswordRequired':
      res.status(400).json({ message: 'Email and Password is required' });
      break;

    case 'NoFile':
      res.status(400).json({ message: 'Please select a file to upload' });
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

    case 'Unauthorized':
      res.status(403).json({ message: 'You are not authorized' });
      break;

    case 'NotFound':
      res.status(404).json({ message: 'Data not found' });
      break;
  
    default:
      res.status(500).json({ message: 'Internal Server Error' });
      break;
  }
}

module.exports = errorHandler;