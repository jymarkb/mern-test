import { Router } from 'express';
import { getAllAccountType } from '@/controllers/accountType.controller';

const router = Router();

router.get('/', getAllAccountType);

export default router;