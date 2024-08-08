import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { verifyJwtToken } from '../utils/verifyJwtToken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
const TOKEN_EXPIRY = '1h';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials: User not found' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials: password' });
    }

    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const verifyToken = async (req: Request, res: Response) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = await verifyJwtToken(token);
    res.status(200).json({ message: 'Token is valid', user: decoded });
  } catch (err) {
    res.status(403).json({ message: 'Failed to authenticate token' });
  }
};

