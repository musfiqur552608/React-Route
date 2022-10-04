import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './layout/Main';
import Friends from './components/Friedns/Friends';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: 'home', element: <Home></Home> },
        { path: '/', element: <Home></Home> },
        { path: 'about', element: <About></About> },
        { path: 'products', element: <Products></Products> },
        { path: 'friends', element: <Friends></Friends> }
      ]
    },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
