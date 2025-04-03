import React from 'react'
import clsx from 'clsx'
import { ButtonProps } from './Button.types'

export function Button({
  variant = 'primary',
  size = 'md',
  shape = 'rectangle',
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'zui-button',
        `zui-button--${variant}`,
        `zui-button--${size}`,
        `zui-button--${shape}`,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
