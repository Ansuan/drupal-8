let glob = require('glob-all')
let mix = require('laravel-mix');

require('laravel-mix-purgecss')

mix.postCss('src/tailwind.css', 'dist', [
  require('tailwindcss'),
])

mix.purgeCss({
  enabled: false, // Remove this line to enable PurgeCSS.
  paths: () => glob.sync([
    path.join(__dirname, '**/*.twig'),
      '/app/web/*/{modules,themes}/custom/**/*.twig',
      '/app/web/{modules,themes}/custom/**/*.twig',
  ]),
  whitelistPatterns: [],
  whitelistPatternsChildren: []
})
