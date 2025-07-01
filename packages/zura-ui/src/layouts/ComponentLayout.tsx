import React, { ReactNode } from 'react'

interface ComponentLayoutProps {
  title: string
  description?: string
  examples?: ReactNode
  usage?: ReactNode
  props?: { name: string; type: string; desc: string }[]
}

export const ComponentLayout = ({
  title,
  description,
  examples,
  usage,
  props,
}: ComponentLayoutProps) => {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 space-y-14 text-left">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-h5 font-semibold text-[color:var(--zui-text-primary)]">
          {title}
        </h1>
        {description && (
          <p className="text-base text-[color:var(--zui-text-secondary)] max-w-prose">
            {description}
          </p>
        )}
      </header>

      {/* Examples */}
      {examples && (
        <section className="space-y-4">
          <p className="text-label text-[color:var(--zui-text-muted)] font-medium">
            Examples
          </p>
          <div>{examples}</div>
        </section>
      )}

      {/* Usage */}
      {usage && (
        <section className="space-y-3">
          <p className="text-label text-[color:var(--zui-text-muted)] font-medium">
            Usage
          </p>
          <pre className="text-sm bg-[var(--zui-surface-10)] text-[color:var(--zui-text-primary)] rounded-md p-4 overflow-auto">
            {usage}
          </pre>
        </section>
      )}

      {/* Props */}
      {props && (
        <section className="space-y-3">
          <p className="text-label text-[color:var(--zui-text-muted)] font-medium">
            Props
          </p>
          <div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm table-auto">
                <thead className="text-[color:var(--zui-text-secondary)] text-xs uppercase tracking-wider">
                  <tr>
                    <th className="text-left pr-4 pb-1">Prop</th>
                    <th className="text-left pr-4 pb-1">Type</th>
                    <th className="text-left pb-1">Description</th>
                  </tr>
                </thead>
                <tbody className="text-[color:var(--zui-text-muted)]">
                  {props.map((prop) => (
                    <tr key={prop.name} className="align-top">
                      <td className="py-1.5 pr-4 font-medium text-[color:var(--zui-text-primary)] whitespace-nowrap">
                        {prop.name}
                      </td>
                      <td className="py-1.5 pr-4 font-mono text-xs text-[color:var(--zui-text-secondary)] whitespace-nowrap">
                        {prop.type}
                      </td>
                      <td className="py-1.5 text-sm">{prop.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
