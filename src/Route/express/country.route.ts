import { Router } from 'express';
import { getCountries } from '@/Repository/country.repository';

const router = Router();

router.get('/', getCountries);

export default router;