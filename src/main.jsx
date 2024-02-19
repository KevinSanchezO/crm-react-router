import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css'
import Layout from './components/Layout'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/Index' //asociar

/*
Con Outlet podemos crear un layout que compartan todas las paginas
En el componente Layout tenemos el componente Outlet, esto le dice a Router-Dom
'Soy el Layout general, todos me comparten pero dentro de Outlet si en element
tengo algo lo renderiza manteniendo el Layout general'

Para tener algo en la pagina principal se crea un children con index: true

Si quiero obtener datos necesito un loader
Cuando quiero procesar un formulario action

Utiliza Loaders para obtener datos de una API o de un objeto (similar a un state)
Utiliza Actions para procesar la entrada de datos en un Form
*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader //recuperar (confuso la verdad, o mas bien tedioso)
      },
      {
        path:'/clientes/nuevo',
        element: <NuevoCliente/>,
        action: nuevoClienteAction
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
