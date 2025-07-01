import clsx from 'clsx'

import React from 'react'
import { TabProps } from './Tab.types'

export function Tab({
  label,
  size = 'sm',
  active,
  className,
  disabled,
}: TabProps) {
  return (
    <button
      className={clsx(
        'zui-tab',
        `zui-tab--${size}`,
        { 'zui-tab--active': active },
        className
      )}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
