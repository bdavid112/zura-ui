import { useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { NavLinkProps } from './NavLink.types'
import React from 'react'

export function NavLink({
  href,
  label,
  icon,
  variant = 'simple',
  isActive,
  external = false,
  className,
}: NavLinkProps) {
  const location = useLocation()
  const active = isActive ?? location.pathname === href

  return (
    <a
      href={href}
      className={clsx(
        'zui-navlink',
        `zui-navlink--${variant}`,
        { 'zui-navlink--active': active },
        className
      )}
    >
      {icon && <span className="zui-navlink__icon">{icon}</span>}
      {label}
    </a>
  )
}
