// Simple JWT authentication middleware example
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer token

  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;  // attach user ID for later
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

const restrict = (roles) => (req, res, next) => {
  // Example role check middleware
  if (!roles.includes(req.userRole)) {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};

module.exports = { authenticate, restrict };
