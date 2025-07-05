import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import employeeRoutes from "./Route/express/employee.route";
import countryRoutes from './Route/express/country.route'
import accountType from './Route/express/accountType.route'
import login from './Route/express/Auth/account.login.route' 

dotenv.config();
const app = express();
app.use(cors()); // todo: cors on .env
app.use(express.urlencoded({ extended: true })); 
const PORT = process.env.BACKEND_PORT || 9000;

app.use(express.json());
app.use('/employees', employeeRoutes); 
app.use('/countries', countryRoutes);
app.use('/accountType', accountType);

app.use('/login', login);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
