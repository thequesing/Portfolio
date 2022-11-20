import Projects from './projects'
import HomePage from './index'
import _404 from './404'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    index: true
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '*',
    element: <_404 />
  }
  /*
  {
    path: '/game',
    element: <Game />,
    exact: true
  }
  */
])
