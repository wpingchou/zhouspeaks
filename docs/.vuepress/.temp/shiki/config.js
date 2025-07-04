import "F:/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "F:/vuepress-starter/node_modules/@vuepress/plugin-shiki/lib/client/styles/shiki.css"
import "F:/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "F:/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "F:/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-diff.css"
import "F:/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-error-level.css"
import "F:/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-focus.css"
import "F:/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "F:/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-word-highlight.css"
import "F:/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "F:/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/index.js"
import "F:/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/code-block-title.css"
export default {
  setup() {
    setupCollapsedLines()
  },
}
