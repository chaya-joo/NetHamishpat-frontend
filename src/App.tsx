import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import InitializedAuth from './auth/InitializedAuth';
function App() {
  return (<>
    <InitializedAuth/>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
