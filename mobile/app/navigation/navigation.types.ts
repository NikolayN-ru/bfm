import { ComponentType } from 'react'
export type TypeRootStackTaramList = {
  Auth: undefined
  Home: undefined
} & TypeRootStackAdminList

type TypeRootStackAdminList = {
  Admin: undefined
}

export interface IRoute {
  name: keyof TypeRootStackTaramList
  component: ComponentType
  isAdmin?: boolean
}
