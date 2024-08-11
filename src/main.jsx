
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import AddProducts from './module-10-08-24/module/addproducts/components/AddProducts.jsx'
import Orders from './module-10-08-24/module/orders/components/Orders.jsx'

import Dashbord from './module-10-08-24/module/Dashbord.jsx'
import Products from './module-10-08-24/module/products/components/Products.jsx'
import Customers from './module-10-08-24/module/customers/components/Customers.jsx'

const router = createBrowserRouter([{
  path : '/',
  element : <App />,
  children : [{
      path : '/dashbord',
      element : <Dashbord />
    },
    {
      path : '/products',
      element : <Products />
    },
    {
      path : '/orders',
      element : <Orders />
    },
    {
      path : '/add-products',
      element : <AddProducts />
    },
    {
      path : '/customers',
      element : <Customers />
    },
    {
      path : '/products/add-products',
      element : <AddProducts />
    }
  ]
  
  
  
  }])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
