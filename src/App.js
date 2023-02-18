import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router';

function App() {
  return (
    <div className="text-center p-5">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
