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
        path: "/viewUser",
        element: <ViewUser></ViewUser>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
