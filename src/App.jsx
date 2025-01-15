import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AddPerson from './components/AddPerson'
import RetriveInfo from './components/RetriveInfo'
import Layout from './pages/Layout/Layout'

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
