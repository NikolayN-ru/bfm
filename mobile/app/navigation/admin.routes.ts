import Admin from '../components/screens/admin/Admin'
import { IRoute } from './navigation.types'
export const adminRoutes: IRoute[] = [
  {
    name: 'Admin',
    component: Admin,
    isAdmin: true
  },
]
