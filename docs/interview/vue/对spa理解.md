![SPA](/assets/spa.png)

## 什么是单页面

单页面应用（Single-Page Application，SPA）是一种现代的 Web 应用程序架构，它在加载初始 HTML 页面后，通过动态地更新页面的内容来提供交互式用户体验，而无需刷新整个页面。相比之下，传统的多页面应用（Multi-Page Application，MPA）每次页面跳转时都会重新加载整个页面。

## 和多页面(MPA)的区别

- 页面加载方式: 在单页面中, 初始化页面加载后, 后续的页面内容更新是通过 JavaScript 动态地获取数据并更新页面, 而不需要重新加载整个页面. 而在 MPA 中, 每次页面跳转都需要重新加载整个页面.

- 用户体验: SPA 提供了更流畅的用户体验, 因为页面切换是通过 JavaScript 异步加载数据并更新, 无需等待整个页面重新加载. 而 MPA 需要每次页面跳转都重新加载整个页面, 用户体验并不是太好, 可能会感到页面刷新的延迟

- 开发和维护: SPA 使用前后端分离的架构, 前端负责处理页面的逻辑和数据交互, 后端负责提供 API. 这样可以降低开发和维护的复杂度. 而 MPA 需要在后端渲染每个页面, 并处理页面之间的跳转逻辑

|                  | SPA                                        | MPA                                       |
| ---------------- | ------------------------------------------ | ----------------------------------------- |
| 组成             | 一个主页面和多个页面片段                   | 多个主页面                                |
| 刷新方式         | 局部刷新                                   | 整页刷新                                  |
| url 模式         | 哈希模式                                   | 历史模式                                  |
| SEO 搜索引擎优化 | 难实现, 可以使用 [SEO 优化](#seo) 方法改善 | 容易实现                                  |
| 数据传递         | 容易                                       | 通过 url, cookie, localStorage 等方式传递 |
| 页面切换         | 速度快, 用户体验好                         | 切换加载资源, 速度慢, 用户体验差          |
| 维护成本         | 相对容易                                   | 相对复杂                                  |

---

### SEO

- 预渲染：使用工具（如 Prerender SPA Plugin）对 SPA 的关键页面进行预渲染，生成静态的 HTML 页面，供搜索引擎爬虫抓取和索引。

---

- SSR（Server-Side Rendering）：在服务器端渲染页面，并返回完整的 HTML 给客户端。这样搜索引擎爬虫可以直接获取到页面的内容。

---

- 合理的元数据和链接：在 SPA 中使用合适的 meta 标签设置页面的标题、描述和关键字。确保每个页面都有唯一的 URL，并在页面中正确使用链接标签（<link rel="canonical">）和分页导航，以便搜索引擎正确抓取和索引页面。

## 扩展, 什么是 hash 路由, 什么是 history 路由

一. **Hash**
1.1 **Hash**路由

- **Hash**路由是在 URL 的片段标识符(即 `#`后面的部分)中进行路由切换的一种方式。例如, `http://example.com/#/home`。

- **Hash**路由的特点是改变 URL 中的片段标识符不会触发浏览器的页面刷新, 而是会触发 **`hashchange`** 事件, 从而可以通过 JavaScript 来监听并处理路由变化。

- 在 **Hash** 路由中，路由器会解析 URL 的片段标识符，并根据其值决定要渲染的页面内容。

  1.2 **Hash**路由的方法:

- `window.location.hash`: 获取当前 URL 的片段标识符 (不包括 `#`)
- `window.addEventListener('hashchange', handler)`: 监听 URL 的片段标识符变化事件, 当片段标识符改变时触发相应的处理函数。
- `window.location.hash = '/home'`: 更改 URL 的片段标识符, 触发相应的路由切换。

二. **History**

2.1 **History**路由

- **History**路由使用浏览器的 `history`API, 通过改变 URL 的路径来实现路由切换。例如: `http://example.com/home`。
- **History**路由的特点是 URL 的路径变化会触发浏览器的页面刷新, 但通过`pushState`或`replaceState`方法可以在不刷新页面的情况下改变 URL 路径。
- 在**History**路由中, 浏览器会根据 URL 的路径来请求相应的资源, 并渲染页面内容。

  2.2 **History**路由的方法:

- `window.history.pushState(state, title, url)`: 将新的 URL 添加到浏览器的历史记录中, 并更新当前 URL 的路径, 但不触发页面刷新。
- `window.history.replaceState(state, title, url)`: 替换当前 URL 的路径, 但不添加新的历史记录条目, 也不触发页面刷新。
- `window.addEventListener('popstate', handler)`: 监听浏览器的历史记录变化事件, 当用户点击浏览器的前进或后退按钮时触发相应的处理函数。
- `window.history.back()`: 导航到浏览器的历史记录中的上一个页面。
- `window.history.forward()`: 导航到浏览器历史记录中的下一个页面。

## 总结:

- **Hash**路由使用 URL 的片段标识符进行路由切换, 不会触发页面刷新, 而**History**路由使用 URL 的路径进行路由切换, 会触发页面更新。
- **Hash**路由通过监听`hashchange`事件来处理路由变化, 而 **History**路由通过监听`popstate`事件来处理历史记录变化。
- 通过修改 `window.location.hash`可以改变 Hash 路由的片段标识符, 通过 `window.history.pushState`或`window.history.replaceState`可以改变 History 路由的 URL 路径。
