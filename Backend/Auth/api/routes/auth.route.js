import express from 'express';
import {doctorsignup, login, signout, signup} from '../controllers/auth.controller.js';
import { google } from '../controllers/auth.controller.js';

const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.post('/google', google);
router.get('/signout', signout);
router.post('/doctor', doctorsignup)

export default router;