import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Route/react/Router';
const App = () => {
    return (
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    );
  }
  

export default App;