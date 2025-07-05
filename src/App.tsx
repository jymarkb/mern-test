import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Route/react/Router';
import { Toaster } from 'sonner';
const App = () => {
    return (
      <BrowserRouter>
        <AppRoutes/>
        <Toaster richColors />
      </BrowserRouter>
    );
  }
  

export default App;