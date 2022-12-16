import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Root from '../components/Root';
import Shop from '../components/Shop';
import Cart from '../components/Cart';
import About from '../components/About';
import ErrorPage from '../components/ErrorPage';
import { productAndCartData } from '../loaders/getCart&ProductsData';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: productAndCartData,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/about',
                element: <About></About>
            }
      ]
    },
    
])
  
export default router;