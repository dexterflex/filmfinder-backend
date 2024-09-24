import express from 'express';
import { signup, signin, logout } from '../controllers/userController.js';

const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.post('/logout', logout);

export default authRouter;
