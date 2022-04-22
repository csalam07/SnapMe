import express from 'express';
const router = express.Router();
import auth from '../middlewares/auth.js';
import userCtrl from '../controllers/userCtrl.js';

router.get('/search', auth, userCtrl.searchUser);

// router.get('/user/:id', auth, userCtrl.getUser);

// router.patch('/user', auth, userCtrl.updateUser);

export default router;
