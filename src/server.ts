import express from 'express';
import dotenv from 'dotenv';
import employeeRoutes from './Route/express/employee.route'

dotenv.config();
const app = express();
const PORT = process.env.BACKEND_PORT || 9000;

app.use(express.json());
app.use('/employees', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
