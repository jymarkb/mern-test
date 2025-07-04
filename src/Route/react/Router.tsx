import { useRoutes } from 'react-router-dom';
import routes from '@/Route/react/routes';

const  AppRoutes = () => {
  return useRoutes(routes);
}

export default AppRoutes;