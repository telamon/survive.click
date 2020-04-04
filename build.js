// SPDX-License-Identifier: AGPL-3.0-or-later

// your code starts here
const { readFileSync, writeFileSync, mkdirSync } = require('fs')
const { join } = require('path')
const root = 'dist'
mkdirSync(root, { recursive: true })
const html = readFileSync('index.html')
const js = readFileSync('cryptology.min.js')
html.replace('<script src="cryptology.min.js"></script>', `<script>${js}</script>`)
writeFileSync(join(root, 'index.html'))
