import React from 'react'

export const ComponentsPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-10">
      <header className="space-y-2">
        <h1 className="text-h4 font-semibold text-[color:var(--zui-text-primary)]">
          Components
        </h1>
        <p className="text-base text-[color:var(--zui-text-secondary)] max-w-prose">
          Browse the building blocks of your next interface. Every component is
          designed with clarity, accessibility, and beauty in mind.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            name: 'Button',
            href: '/components/button',
            desc: 'Trigger actions or navigate between views.',
          },
          {
            name: 'NavLink',
            href: '/components/navlink',
            desc: 'A stylized link component, optionally expandable.',
          },
          {
            name: 'Input',
            href: '/components/input',
            desc: 'Capture user input with styling and accessibility.',
          },
          {
            name: 'Select',
            href: '/components/select',
            desc: 'Dropdown select input with keyboard support.',
          },
          {
            name: 'Checkbox',
            href: '/components/checkbox',
            desc: 'Let users toggle single options on or off.',
          },
        ].map((comp) => (
          <a
            key={comp.name}
            href={comp.href}
            className="group p-4 rounded-md bg-[var(--zui-surface-10)] hover:bg-[var(--zui-surface-100)] transition-all"
          >
            <p className="text-label font-semibold text-[color:var(--zui-text-primary)] group-hover:text-[color:var(--zui-primary-base-lg)]">
              {comp.name}
            </p>
            <p className="text-sm text-[color:var(--zui-text-secondary)] mt-1">
              {comp.desc}
            </p>
          </a>
        ))}
      </section>
    </main>
  )
}
