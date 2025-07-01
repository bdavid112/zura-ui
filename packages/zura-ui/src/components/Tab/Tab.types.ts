import { ReactNode } from 'react'

export type TabVariant = 'outlined' | 'elevated'
export type TabSize = 'sm' | 'md' | 'lg'

export interface TabProps {
  label?: string
  icon?: ReactNode
  className?: string
  variant?: TabVariant
  active?: boolean
  size?: TabSize
  disabled?: boolean
}
