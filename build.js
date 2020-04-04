// SPDX-License-Identifier: AGPL-3.0-or-later

// your code starts here
const { readFileSync, writeFileSync, mkdirSync } = require('fs')
const { join } = require('path')
const root = 'docs' // gh pages
mkdirSync(root, { recursive: true })
const html = readFileSync('index.html').toString('utf8')
const js = readFileSync('cryptology.min.js').toString('utf8')

const combined = html.replace(
  '<script src="./cryptology.min.js"></script>',
  `<script>${js}</script>`
)
writeFileSync(join(root, 'index.html'), combined)
