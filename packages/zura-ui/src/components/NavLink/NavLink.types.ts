import { ReactNode } from 'react'

export type NavLinkVariant = 'simple' | 'extendable'

export interface NavLinkProps {
  href: string
  label?: string
  icon?: ReactNode
  className?: string
  variant?: NavLinkVariant
  isActive?: boolean
  external?: boolean
}
