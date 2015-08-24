npm install
npm run build
npm run dist
rm -rf integration-aftenposten.zip
zip --exclude=*.DS_Store -r integration-aftenposten.zip dist gfx index.html disqus.html
