const fs = require('fs')
const path = require('path')

const SKIP_DIRS = new Set(['node_modules', '.git'])

const enumerateFiles = (directory, { all = false } = {}) => {
  const root = path.resolve(directory)
  const stats = fs.statSync(root)

  if (stats.isFile()) {
    return [root]
  }

  if (!stats.isDirectory()) {
    return []
  }

  const files = []

  const walk = (current) => {
    const entries = fs.readdirSync(current, { withFileTypes: true })

    entries.forEach((entry) => {
      if (!all && entry.isDirectory() && SKIP_DIRS.has(entry.name)) {
        return
      }

      const fullPath = path.join(current, entry.name)

      if (entry.isDirectory()) {
        walk(fullPath)
        return
      }

      if (entry.isFile() || entry.isSymbolicLink()) {
        files.push(fullPath)
      }
    })
  }

  walk(root)

  return files
    .map((filePath) => path.relative(root, filePath).split(path.sep).join('/'))
    .sort()
}

const main = () => {
  const args = process.argv.slice(2)
  const all = args.includes('--all')
  const directory = args.find((arg) => !arg.startsWith('-')) || process.cwd()

  if (!fs.existsSync(directory)) {
    console.error(`Directory not found: ${directory}`)
    process.exit(1)
  }

  enumerateFiles(directory, { all }).forEach((filePath) => {
    console.log(filePath)
  })
}

if (require.main === module) {
  main()
}

module.exports = { enumerateFiles }
