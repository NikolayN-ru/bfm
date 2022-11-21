import Auth from '../components/screens/auth/auth'
import Home from '../components/screens/home/Home'
import { IRoute } from './navigation.types'

export const userRoutes: IRoute[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Auth',
    component: Auth,
  },
]
