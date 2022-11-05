const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/nikhil/Desktop/Sachai/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/nikhil/Desktop/Sachai/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/nikhil/Desktop/Sachai/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/nikhil/Desktop/Sachai/src/pages/index.js"))),
  "component---src-pages-repositories-js": hot(preferDefault(require("/home/nikhil/Desktop/Sachai/src/pages/repositories.js"))),
  "component---src-pages-works-js": hot(preferDefault(require("/home/nikhil/Desktop/Sachai/src/pages/works.js"))),
  "component---src-templates-blogs-categories-js": hot(preferDefault(require("/home/nikhil/Desktop/Sachai/src/templates/blogs/categories.js"))),
  "component---src-templates-blogs-post-js": hot(preferDefault(require("/home/nikhil/Desktop/Sachai/src/templates/blogs/post.js"))),
  "component---src-templates-works-work-js": hot(preferDefault(require("/home/nikhil/Desktop/Sachai/src/templates/works/work.js")))
}

