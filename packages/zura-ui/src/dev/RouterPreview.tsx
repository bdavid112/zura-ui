import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavLink } from '@/components/NavLink'
import React, { useEffect, useState } from 'react'
import { Main } from '@/pages/Main'
import { Button } from '@/components/Button'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { ButtonPage } from '@/pages/ButtonPage'
import { ComponentsPage } from '@/pages/ComponentsPage'
import { NavLinkPage } from '@/pages/NavLinkPage'

export function RouterPreview() {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute('data-theme')
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme!)
  }, [theme])

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <BrowserRouter>
      <nav className="flex gap-6 p-6 border-b border-gray-200 dark:border-gray-700 h-fit items-center">
        <NavLink href="/" label="Home" />
        <NavLink href="/components" label="Components" variant="expandable">
          <NavLink href="/components/button" label="Button" />
          <NavLink href="/components/navlink" label="NavLink" />
        </NavLink>
        <NavLink href="/docs" label="Docs" />
        {/* Theme Toggle Button */}
        <div className="w-full flex justify-end">
          <Button
            variant="ghost"
            size="md"
            shape="pill"
            icon={theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
            onClick={changeTheme}
            aria-label="Toggle theme"
          />
        </div>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/components/button" element={<ButtonPage />} />
          <Route path="/components/navlink" element={<NavLinkPage />} />
          <Route path="/docs" element={<p>Docs page</p>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
