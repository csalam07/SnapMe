import Users from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token)
      return res.status(401).json({ msg: 'No token, authorization denied' });
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!decodedToken)
      return res.status(401).json({ msg: 'Token is not valid' });
    const user = await Users.findOne({
      _id: decodedToken.id,
    });
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ msg: error.message });
  }
};

export default auth;
