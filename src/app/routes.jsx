import Projects from './projects'
import HomePage from './index'
import _404 from './404'
import { createBrowserRouter } from 'react-router-dom'
const routes = [
  {
    path: '/',
    element: <HomePage />,
    exact: true
  },
  {
    path: '/projects',
    element: <Projects />,
    exact: true
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
]

export const router = createBrowserRouter(routes)
