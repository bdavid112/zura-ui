import React from 'react'
import { Button } from '@/components/Button'
import { FiArrowRight } from 'react-icons/fi'
import { ComponentLayout } from '@/layouts/ComponentLayout'

export const ButtonPage = () => {
  return (
    <ComponentLayout
      title="Button"
      description="A versatile UI element used to trigger actions, submit forms, or navigate between views."
      examples={
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button icon={<FiArrowRight />} shape="pill" />
        </div>
      }
      usage={<code>{`<Button variant="primary">Click me</Button>`}</code>}
      props={[
        {
          name: 'variant',
          type: `'primary' | 'secondary' | 'ghost'`,
          desc: 'Visual style of the button.',
        },
        {
          name: 'size',
          type: `'sm' | 'md' | 'lg'`,
          desc: 'Controls size and padding.',
        },
        {
          name: 'shape',
          type: `'rectangle' | 'pill'`,
          desc: 'Border radius shape.',
        },
        {
          name: 'icon',
          type: 'ReactNode',
          desc: 'Optional icon inside the button.',
        },
        {
          name: 'iconPosition',
          type: `'left' | 'right'`,
          desc: 'Where the icon appears.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          desc: 'Disables interaction.',
        },
      ]}
    />
  )
}
