require "lib/breadcrumb_helpers"
helpers BreadcrumbHelpers

# frozen_string_literal: true
Slim::Engine.set_options pretty: true

# Live Reload
activate :livereload, host: 'localhost'

# External pipeline
activate :external_pipeline,
         name: :npm,
         command: build? ? 'npm run build' : 'npm run watch',
         source: '.tmp/build',
         latency: 1

# Pretty URLs
activate :directory_indexes

# Build-specific configuration (enable asset hashing when UI kit is production-ready)
configure :build do
  activate :minify_css
  # activate :asset_hash
end

# Move routes up a level
ready do
  sitemap.resources.map do |res|
    if res.path.index('pages') == 0 && File.extname(res.path) == '.html'
      proxy "/#{res.path.gsub('pages/', '')}", res.path
    end
  end
end

proxy "/index.html", "/components/index.html"

# Helpers
helpers do
end
