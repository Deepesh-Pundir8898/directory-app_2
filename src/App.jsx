import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout/layout'
import AddPerson from './components/AddPerson'
import RetriveInfo from './components/RetriveInfo'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<AddPerson />
        },
        {
          path:"/info",
          element:<RetriveInfo />
        }
    ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}  />
    </>
  )
}

export default App
