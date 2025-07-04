import { Router } from 'express';
import { getAllEmployees } from '@/Repository/employee.repository';

const router = Router();

router.get('/', getAllEmployees);

export default router;