import { ReactNode } from 'react'

export type TabsVariant = 'outlined' | 'elevated'
export type TabsSize = 'sm' | 'md' | 'lg'
export type TabsOrientation = 'vertical' | 'horizontal'

export interface TabProps {
  variant?: TabsVariant
  size?: TabsSize
  orientation?: TabsOrientation
  children?: ReactNode
  className?: string
}
