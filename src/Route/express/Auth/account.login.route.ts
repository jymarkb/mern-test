import { Login } from '@/controllers/Auth/account.login';
import { Router } from 'express';

const router = Router();

router.post("/", Login);

export default router;