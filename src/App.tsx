import { RouterProvider } from 'react-router-dom'
import { routes } from './contsts/routes'

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
