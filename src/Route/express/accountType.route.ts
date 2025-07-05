import { Router } from 'express';
import { getAllAccountType } from '@/Repository/accountType.repository';

const router = Router();

router.get('/', getAllAccountType);

export default router;