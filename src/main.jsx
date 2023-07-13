import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import AddUser from './Pages/AddUser/AddUser.jsx';
import ViewUser from './Pages/ViewUser/ViewUser.jsx';
import { Provider } from 'react-redux';
import store from './app/store.jsx';
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>

      },
      {
        path: "/addUser",
        element: <AddUser></AddUser>
      },
      {
        path: `/AddUser/:id`,
        element: <AddUser></AddUser>,
        loader: ({ params }) => fetch(`https://user-management-system-assignment-backend.vercel.app/users/${params.id}`)
      },
      {
        path: "/viewUser",
        element: <ViewUser></ViewUser>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <div className='bg-[#e0e7ff]'>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>

  </React.StrictMode>,
)
