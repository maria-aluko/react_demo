import { RouterProvider } from 'react-router-dom';
import { router } from './routes/appRoutes.jsx';
import './App.css'


function App() {
  return (
    <RouterProvider 
      router={router}
      future={{
        v7_startTransition: true,
      }}
      />
  );
}

export default App;