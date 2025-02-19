import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema } from '../validation/auth.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import jsonParser from '../middlewares/jsonParser.js';

const authRouter = express.Router();

authRouter.post(
  '/register',
  jsonParser,
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);
authRouter.post(
  '/login',
  jsonParser,
  validateBody(registerUserSchema),
  ctrlWrapper(loginUserController),
);
authRouter.post(
  '/refresh',
  jsonParser,
  validateBody(registerUserSchema),
  ctrlWrapper(refreshUserSessionController),
);
authRouter.post(
  '/logout',
  jsonParser,
  validateBody(registerUserSchema),
  ctrlWrapper(logoutUserController),
);

export default authRouter;
