import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts';
import { HomeContainer } from './containers';

function App() {

  const routes = createBrowserRouter([{
    element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomeContainer />
        },
        {
          path: '/detail/:id',
          element: <></>
        },
        {
          path: '*',
          element: <h1>Page Not found</h1>
        }
      ]
  }])

  return (
    <>
      <RouterProvider router={routes}/>
     
    </>
  )
}

export default App
