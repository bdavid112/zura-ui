import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

import React, { useRef, useState } from 'react'
import { TabProps } from './Tabs.types'

export function Tabs({
  variant = 'outlined',
  size = 'sm',
  orientation = 'horizontal',
  children,
  className,
}: TabProps) {
  return (
    <div
      className={clsx(
        'zui-tabs',
        `zui-tabs--${variant}`,
        `zui-tabs--${size}`,
        `zui-tabs--${orientation}`,
        className
      )}
    >
      {children}
    </div>
  )
}
