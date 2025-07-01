import React from 'react'
import { NavLink } from '@/components/NavLink'
import { HiHome, HiMenu } from 'react-icons/hi'
import { ComponentLayout } from '@/layouts/ComponentLayout'

export const NavLinkPage = () => {
  return (
    <ComponentLayout
      title="NavLink"
      description="A flexible navigation link with support for active styling, icons, and expandable children."
      examples={
        <div className="flex flex-col gap-4">
          <NavLink href="/" label="Home" icon={<HiHome />} />
          <NavLink
            href="/components"
            label="Components"
            icon={<HiMenu />}
            variant="expandable"
          >
            <NavLink href="/components/button" label="Button" />
            <NavLink href="/components/navlink" label="NavLink" />
          </NavLink>
        </div>
      }
      usage={`<NavLink href="/docs" label="Docs" />
<NavLink href="/components" label="Components" variant="expandable">
  <NavLink href="/components/button" label="Button" />
  <NavLink href="/components/navlink" label="NavLink" />
</NavLink>`}
      props={[
        {
          name: 'href',
          type: 'string',
          desc: 'URL the nav link points to.',
        },
        {
          name: 'label',
          type: 'string',
          desc: 'Text label for the link.',
        },
        {
          name: 'icon',
          type: 'ReactNode',
          desc: 'Optional icon element.',
        },
        {
          name: 'variant',
          type: `'simple' | 'expandable'`,
          desc: 'Determines if it behaves like a dropdown.',
        },
        {
          name: 'isActive',
          type: 'boolean',
          desc: 'For manually controlling active state.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          desc: 'Child NavLinks (used when expandable).',
        },
      ]}
    />
  )
}
