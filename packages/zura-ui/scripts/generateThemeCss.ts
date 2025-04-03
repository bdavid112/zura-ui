// scripts/generate-theme-css.ts
import { typography } from '../tokens/typography.ts'
import fs from 'fs'

let css = `@theme {\n`

Object.entries(typography.text).forEach(([key, value]) => {
  css += `  --text-${key}: ${value['fontSize']};\n`
  css += `  --leading-${key}: ${value['lineHeight']};\n\n`
})

css += `}`

fs.writeFileSync('src/styles/theme.css', css)
