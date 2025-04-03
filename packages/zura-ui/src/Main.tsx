import React, { useEffect, useState } from 'react'
import { Button } from './components/Button/Button'

export const Main = () => {
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
    <div className="container p-16">
      <p className="displayLg">Display lg</p>
      <p className="displayMd">Display md</p>
      <p className="displaySm">Display sm</p>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>This is a paragraph</p>
      <p>
        <small>This is a small text</small>
      </p>
      <label className="block" htmlFor="nothing">
        Label
      </label>
      <p className="text-caption">Caption</p>
      <div className="flex gap-2">
        <Button
          variant="primary"
          size="md"
          shape="pill"
          disabled={true}
          onClick={() => changeTheme()}
        >
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </Button>
        <Button
          variant="secondary"
          size="md"
          shape="pill"
          disabled={true}
          onClick={() => changeTheme()}
        >
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </Button>
        <Button
          variant="ghost"
          size="md"
          shape="pill"
          disabled={false}
          onClick={() => changeTheme()}
        >
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </Button>
      </div>
    </div>
  )
}
