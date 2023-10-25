import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Browse from './pages/Browse';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Browse />,
    errorElement: <PageNotFound />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/browse',
    element: <Browse />
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App;