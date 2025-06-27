import React, { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import { NavLink } from '@/components/NavLink'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

export const Main = () => {
  return (
    <div className="container p-16 m-auto">
      <section className="max-w-4xl mx-auto px-6 py-24 text-center space-y-10 font-[var(--default-font-family)]">
        {/* Title + Subtitle */}
        <div className="space-y-2">
          <div className="overflow-visible">
            <p className="displayMd font-extrabold zui-gradient-background zui-clip-text zui-animate-gradient-fade">
              Zura UI
            </p>
          </div>

          <p className="text-h5 zui-animate-fade-in zui-delay-100 text-[color:var(--zui-text-secondary)]">
            Build interfaces that feel effortless — and look beautiful doing it.
          </p>
        </div>

        {/* What is Zura? */}
        <div className="space-y-4">
          <h2 className="zui-animate-fade-in zui-delay-200">What is Zura?</h2>

          <p className="zui-animate-fade-in zui-delay-300">
            Zura is a handcrafted UI library for React and Tailwind CSS, built
            for speed, beauty, and developer happiness.
          </p>

          <p className="text-sm zui-animate-fade-in zui-delay-400 text-[color:var(--zui-text-muted)]">
            Carefully designed. Fully customizable. Ready to use.
          </p>
        </div>

        {/* Mini Highlights */}
        <div className="space-y-1 text-caption zui-animate-fade-in zui-delay-500 text-[color:var(--zui-text-muted)]">
          <p>100% open-source.</p>
          <p>Zero friction. All flow.</p>
          <p>And yes — it’s free (for now).</p>
        </div>

        {/* CTA */}
        <div className="pt-6 zui-animate-fade-in zui-delay-600">
          <p className="text-base font-medium text-[color:var(--zui-primary-base-lg)]">
            Try it out — your next UI starts here.
          </p>
        </div>
      </section>

      <div className="flex items-center justify-center gap-4 mt-8">
        {/* Action Button */}
        <Button variant="secondary" size="md" shape="rectangle">
          Explore Components
        </Button>
      </div>
    </div>
  )
}
