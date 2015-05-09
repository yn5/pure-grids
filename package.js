Package.describe({
  name: 'yn5:pure-grids',
  version: '0.6.0',
  summary: 'Pure.css grids and offsets',
  git: 'https://github.com/yn5/pure-grids',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('pure-grids.min.css', 'client');
  api.addFiles('pure-offsets.css', 'client');
});
