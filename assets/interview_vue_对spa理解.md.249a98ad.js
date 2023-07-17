import{_ as t,c as e,o,a as d}from"./app.72108f09.js";const r="/assets/spa.2f78267b.png",_=JSON.parse('{"title":"\u4EC0\u4E48\u662F\u5355\u9875\u9762","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F\u5355\u9875\u9762","slug":"\u4EC0\u4E48\u662F\u5355\u9875\u9762"},{"level":2,"title":"\u548C\u591A\u9875\u9762(MPA)\u7684\u533A\u522B","slug":"\u548C\u591A\u9875\u9762-mpa-\u7684\u533A\u522B"},{"level":3,"title":"SEO","slug":"seo"},{"level":2,"title":"\u6269\u5C55, \u4EC0\u4E48\u662F hash \u8DEF\u7531, \u4EC0\u4E48\u662F history \u8DEF\u7531","slug":"\u6269\u5C55-\u4EC0\u4E48\u662F-hash-\u8DEF\u7531-\u4EC0\u4E48\u662F-history-\u8DEF\u7531"},{"level":2,"title":"\u603B\u7ED3:","slug":"\u603B\u7ED3"}],"relativePath":"interview/vue/\u5BF9spa\u7406\u89E3.md","lastUpdated":1689610417000}'),i={name:"interview/vue/\u5BF9spa\u7406\u89E3.md"},a=d('<p><img src="'+r+'" alt="SPA"></p><h2 id="\u4EC0\u4E48\u662F\u5355\u9875\u9762" tabindex="-1">\u4EC0\u4E48\u662F\u5355\u9875\u9762 <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5355\u9875\u9762" aria-hidden="true">#</a></h2><p>\u5355\u9875\u9762\u5E94\u7528\uFF08Single-Page Application\uFF0CSPA\uFF09\u662F\u4E00\u79CD\u73B0\u4EE3\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u67B6\u6784\uFF0C\u5B83\u5728\u52A0\u8F7D\u521D\u59CB HTML \u9875\u9762\u540E\uFF0C\u901A\u8FC7\u52A8\u6001\u5730\u66F4\u65B0\u9875\u9762\u7684\u5185\u5BB9\u6765\u63D0\u4F9B\u4EA4\u4E92\u5F0F\u7528\u6237\u4F53\u9A8C\uFF0C\u800C\u65E0\u9700\u5237\u65B0\u6574\u4E2A\u9875\u9762\u3002\u76F8\u6BD4\u4E4B\u4E0B\uFF0C\u4F20\u7EDF\u7684\u591A\u9875\u9762\u5E94\u7528\uFF08Multi-Page Application\uFF0CMPA\uFF09\u6BCF\u6B21\u9875\u9762\u8DF3\u8F6C\u65F6\u90FD\u4F1A\u91CD\u65B0\u52A0\u8F7D\u6574\u4E2A\u9875\u9762\u3002</p><h2 id="\u548C\u591A\u9875\u9762-mpa-\u7684\u533A\u522B" tabindex="-1">\u548C\u591A\u9875\u9762(MPA)\u7684\u533A\u522B <a class="header-anchor" href="#\u548C\u591A\u9875\u9762-mpa-\u7684\u533A\u522B" aria-hidden="true">#</a></h2><ul><li><p>\u9875\u9762\u52A0\u8F7D\u65B9\u5F0F: \u5728\u5355\u9875\u9762\u4E2D, \u521D\u59CB\u5316\u9875\u9762\u52A0\u8F7D\u540E, \u540E\u7EED\u7684\u9875\u9762\u5185\u5BB9\u66F4\u65B0\u662F\u901A\u8FC7 JavaScript \u52A8\u6001\u5730\u83B7\u53D6\u6570\u636E\u5E76\u66F4\u65B0\u9875\u9762, \u800C\u4E0D\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u6574\u4E2A\u9875\u9762. \u800C\u5728 MPA \u4E2D, \u6BCF\u6B21\u9875\u9762\u8DF3\u8F6C\u90FD\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u6574\u4E2A\u9875\u9762.</p></li><li><p>\u7528\u6237\u4F53\u9A8C: SPA \u63D0\u4F9B\u4E86\u66F4\u6D41\u7545\u7684\u7528\u6237\u4F53\u9A8C, \u56E0\u4E3A\u9875\u9762\u5207\u6362\u662F\u901A\u8FC7 JavaScript \u5F02\u6B65\u52A0\u8F7D\u6570\u636E\u5E76\u66F4\u65B0, \u65E0\u9700\u7B49\u5F85\u6574\u4E2A\u9875\u9762\u91CD\u65B0\u52A0\u8F7D. \u800C MPA \u9700\u8981\u6BCF\u6B21\u9875\u9762\u8DF3\u8F6C\u90FD\u91CD\u65B0\u52A0\u8F7D\u6574\u4E2A\u9875\u9762, \u7528\u6237\u4F53\u9A8C\u5E76\u4E0D\u662F\u592A\u597D, \u53EF\u80FD\u4F1A\u611F\u5230\u9875\u9762\u5237\u65B0\u7684\u5EF6\u8FDF</p></li><li><p>\u5F00\u53D1\u548C\u7EF4\u62A4: SPA \u4F7F\u7528\u524D\u540E\u7AEF\u5206\u79BB\u7684\u67B6\u6784, \u524D\u7AEF\u8D1F\u8D23\u5904\u7406\u9875\u9762\u7684\u903B\u8F91\u548C\u6570\u636E\u4EA4\u4E92, \u540E\u7AEF\u8D1F\u8D23\u63D0\u4F9B API. \u8FD9\u6837\u53EF\u4EE5\u964D\u4F4E\u5F00\u53D1\u548C\u7EF4\u62A4\u7684\u590D\u6742\u5EA6. \u800C MPA \u9700\u8981\u5728\u540E\u7AEF\u6E32\u67D3\u6BCF\u4E2A\u9875\u9762, \u5E76\u5904\u7406\u9875\u9762\u4E4B\u95F4\u7684\u8DF3\u8F6C\u903B\u8F91</p></li></ul><table><thead><tr><th></th><th>SPA</th><th>MPA</th></tr></thead><tbody><tr><td>\u7EC4\u6210</td><td>\u4E00\u4E2A\u4E3B\u9875\u9762\u548C\u591A\u4E2A\u9875\u9762\u7247\u6BB5</td><td>\u591A\u4E2A\u4E3B\u9875\u9762</td></tr><tr><td>\u5237\u65B0\u65B9\u5F0F</td><td>\u5C40\u90E8\u5237\u65B0</td><td>\u6574\u9875\u5237\u65B0</td></tr><tr><td>url \u6A21\u5F0F</td><td>\u54C8\u5E0C\u6A21\u5F0F</td><td>\u5386\u53F2\u6A21\u5F0F</td></tr><tr><td>SEO \u641C\u7D22\u5F15\u64CE\u4F18\u5316</td><td>\u96BE\u5B9E\u73B0, \u53EF\u4EE5\u4F7F\u7528 <a href="#seo">SEO \u4F18\u5316</a> \u65B9\u6CD5\u6539\u5584</td><td>\u5BB9\u6613\u5B9E\u73B0</td></tr><tr><td>\u6570\u636E\u4F20\u9012</td><td>\u5BB9\u6613</td><td>\u901A\u8FC7 url, cookie, localStorage \u7B49\u65B9\u5F0F\u4F20\u9012</td></tr><tr><td>\u9875\u9762\u5207\u6362</td><td>\u901F\u5EA6\u5FEB, \u7528\u6237\u4F53\u9A8C\u597D</td><td>\u5207\u6362\u52A0\u8F7D\u8D44\u6E90, \u901F\u5EA6\u6162, \u7528\u6237\u4F53\u9A8C\u5DEE</td></tr><tr><td>\u7EF4\u62A4\u6210\u672C</td><td>\u76F8\u5BF9\u5BB9\u6613</td><td>\u76F8\u5BF9\u590D\u6742</td></tr></tbody></table><hr><h3 id="seo" tabindex="-1">SEO <a class="header-anchor" href="#seo" aria-hidden="true">#</a></h3><ul><li>\u9884\u6E32\u67D3\uFF1A\u4F7F\u7528\u5DE5\u5177\uFF08\u5982 Prerender SPA Plugin\uFF09\u5BF9 SPA \u7684\u5173\u952E\u9875\u9762\u8FDB\u884C\u9884\u6E32\u67D3\uFF0C\u751F\u6210\u9759\u6001\u7684 HTML \u9875\u9762\uFF0C\u4F9B\u641C\u7D22\u5F15\u64CE\u722C\u866B\u6293\u53D6\u548C\u7D22\u5F15\u3002</li></ul><hr><ul><li>SSR\uFF08Server-Side Rendering\uFF09\uFF1A\u5728\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\u9875\u9762\uFF0C\u5E76\u8FD4\u56DE\u5B8C\u6574\u7684 HTML \u7ED9\u5BA2\u6237\u7AEF\u3002\u8FD9\u6837\u641C\u7D22\u5F15\u64CE\u722C\u866B\u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6\u5230\u9875\u9762\u7684\u5185\u5BB9\u3002</li></ul><hr><ul><li>\u5408\u7406\u7684\u5143\u6570\u636E\u548C\u94FE\u63A5\uFF1A\u5728 SPA \u4E2D\u4F7F\u7528\u5408\u9002\u7684 meta \u6807\u7B7E\u8BBE\u7F6E\u9875\u9762\u7684\u6807\u9898\u3001\u63CF\u8FF0\u548C\u5173\u952E\u5B57\u3002\u786E\u4FDD\u6BCF\u4E2A\u9875\u9762\u90FD\u6709\u552F\u4E00\u7684 URL\uFF0C\u5E76\u5728\u9875\u9762\u4E2D\u6B63\u786E\u4F7F\u7528\u94FE\u63A5\u6807\u7B7E\uFF08<link rel="canonical">\uFF09\u548C\u5206\u9875\u5BFC\u822A\uFF0C\u4EE5\u4FBF\u641C\u7D22\u5F15\u64CE\u6B63\u786E\u6293\u53D6\u548C\u7D22\u5F15\u9875\u9762\u3002</li></ul><h2 id="\u6269\u5C55-\u4EC0\u4E48\u662F-hash-\u8DEF\u7531-\u4EC0\u4E48\u662F-history-\u8DEF\u7531" tabindex="-1">\u6269\u5C55, \u4EC0\u4E48\u662F hash \u8DEF\u7531, \u4EC0\u4E48\u662F history \u8DEF\u7531 <a class="header-anchor" href="#\u6269\u5C55-\u4EC0\u4E48\u662F-hash-\u8DEF\u7531-\u4EC0\u4E48\u662F-history-\u8DEF\u7531" aria-hidden="true">#</a></h2><p>\u4E00. <strong>Hash</strong> 1.1 <strong>Hash</strong>\u8DEF\u7531</p><ul><li><p><strong>Hash</strong>\u8DEF\u7531\u662F\u5728 URL \u7684\u7247\u6BB5\u6807\u8BC6\u7B26(\u5373 <code>#</code>\u540E\u9762\u7684\u90E8\u5206)\u4E2D\u8FDB\u884C\u8DEF\u7531\u5207\u6362\u7684\u4E00\u79CD\u65B9\u5F0F\u3002\u4F8B\u5982, <code>http://example.com/#/home</code>\u3002</p></li><li><p><strong>Hash</strong>\u8DEF\u7531\u7684\u7279\u70B9\u662F\u6539\u53D8 URL \u4E2D\u7684\u7247\u6BB5\u6807\u8BC6\u7B26\u4E0D\u4F1A\u89E6\u53D1\u6D4F\u89C8\u5668\u7684\u9875\u9762\u5237\u65B0, \u800C\u662F\u4F1A\u89E6\u53D1 <strong><code>hashchange</code></strong> \u4E8B\u4EF6, \u4ECE\u800C\u53EF\u4EE5\u901A\u8FC7 JavaScript \u6765\u76D1\u542C\u5E76\u5904\u7406\u8DEF\u7531\u53D8\u5316\u3002</p></li><li><p>\u5728 <strong>Hash</strong> \u8DEF\u7531\u4E2D\uFF0C\u8DEF\u7531\u5668\u4F1A\u89E3\u6790 URL \u7684\u7247\u6BB5\u6807\u8BC6\u7B26\uFF0C\u5E76\u6839\u636E\u5176\u503C\u51B3\u5B9A\u8981\u6E32\u67D3\u7684\u9875\u9762\u5185\u5BB9\u3002</p><p>1.2 <strong>Hash</strong>\u8DEF\u7531\u7684\u65B9\u6CD5:</p></li><li><p><code>window.location.hash</code>: \u83B7\u53D6\u5F53\u524D URL \u7684\u7247\u6BB5\u6807\u8BC6\u7B26 (\u4E0D\u5305\u62EC <code>#</code>)</p></li><li><p><code>window.addEventListener(&#39;hashchange&#39;, handler)</code>: \u76D1\u542C URL \u7684\u7247\u6BB5\u6807\u8BC6\u7B26\u53D8\u5316\u4E8B\u4EF6, \u5F53\u7247\u6BB5\u6807\u8BC6\u7B26\u6539\u53D8\u65F6\u89E6\u53D1\u76F8\u5E94\u7684\u5904\u7406\u51FD\u6570\u3002</p></li><li><p><code>window.location.hash = &#39;/home&#39;</code>: \u66F4\u6539 URL \u7684\u7247\u6BB5\u6807\u8BC6\u7B26, \u89E6\u53D1\u76F8\u5E94\u7684\u8DEF\u7531\u5207\u6362\u3002</p></li></ul><p>\u4E8C. <strong>History</strong></p><p>2.1 <strong>History</strong>\u8DEF\u7531</p><ul><li><p><strong>History</strong>\u8DEF\u7531\u4F7F\u7528\u6D4F\u89C8\u5668\u7684 <code>history</code>API, \u901A\u8FC7\u6539\u53D8 URL \u7684\u8DEF\u5F84\u6765\u5B9E\u73B0\u8DEF\u7531\u5207\u6362\u3002\u4F8B\u5982: <code>http://example.com/home</code>\u3002</p></li><li><p><strong>History</strong>\u8DEF\u7531\u7684\u7279\u70B9\u662F URL \u7684\u8DEF\u5F84\u53D8\u5316\u4F1A\u89E6\u53D1\u6D4F\u89C8\u5668\u7684\u9875\u9762\u5237\u65B0, \u4F46\u901A\u8FC7<code>pushState</code>\u6216<code>replaceState</code>\u65B9\u6CD5\u53EF\u4EE5\u5728\u4E0D\u5237\u65B0\u9875\u9762\u7684\u60C5\u51B5\u4E0B\u6539\u53D8 URL \u8DEF\u5F84\u3002</p></li><li><p>\u5728<strong>History</strong>\u8DEF\u7531\u4E2D, \u6D4F\u89C8\u5668\u4F1A\u6839\u636E URL \u7684\u8DEF\u5F84\u6765\u8BF7\u6C42\u76F8\u5E94\u7684\u8D44\u6E90, \u5E76\u6E32\u67D3\u9875\u9762\u5185\u5BB9\u3002</p><p>2.2 <strong>History</strong>\u8DEF\u7531\u7684\u65B9\u6CD5:</p></li><li><p><code>window.history.pushState(state, title, url)</code>: \u5C06\u65B0\u7684 URL \u6DFB\u52A0\u5230\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u4E2D, \u5E76\u66F4\u65B0\u5F53\u524D URL \u7684\u8DEF\u5F84, \u4F46\u4E0D\u89E6\u53D1\u9875\u9762\u5237\u65B0\u3002</p></li><li><p><code>window.history.replaceState(state, title, url)</code>: \u66FF\u6362\u5F53\u524D URL \u7684\u8DEF\u5F84, \u4F46\u4E0D\u6DFB\u52A0\u65B0\u7684\u5386\u53F2\u8BB0\u5F55\u6761\u76EE, \u4E5F\u4E0D\u89E6\u53D1\u9875\u9762\u5237\u65B0\u3002</p></li><li><p><code>window.addEventListener(&#39;popstate&#39;, handler)</code>: \u76D1\u542C\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u53D8\u5316\u4E8B\u4EF6, \u5F53\u7528\u6237\u70B9\u51FB\u6D4F\u89C8\u5668\u7684\u524D\u8FDB\u6216\u540E\u9000\u6309\u94AE\u65F6\u89E6\u53D1\u76F8\u5E94\u7684\u5904\u7406\u51FD\u6570\u3002</p></li><li><p><code>window.history.back()</code>: \u5BFC\u822A\u5230\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u4E2D\u7684\u4E0A\u4E00\u4E2A\u9875\u9762\u3002</p></li><li><p><code>window.history.forward()</code>: \u5BFC\u822A\u5230\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u4E2D\u7684\u4E0B\u4E00\u4E2A\u9875\u9762\u3002</p></li></ul><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3: <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li><strong>Hash</strong>\u8DEF\u7531\u4F7F\u7528 URL \u7684\u7247\u6BB5\u6807\u8BC6\u7B26\u8FDB\u884C\u8DEF\u7531\u5207\u6362, \u4E0D\u4F1A\u89E6\u53D1\u9875\u9762\u5237\u65B0, \u800C<strong>History</strong>\u8DEF\u7531\u4F7F\u7528 URL \u7684\u8DEF\u5F84\u8FDB\u884C\u8DEF\u7531\u5207\u6362, \u4F1A\u89E6\u53D1\u9875\u9762\u66F4\u65B0\u3002</li><li><strong>Hash</strong>\u8DEF\u7531\u901A\u8FC7\u76D1\u542C<code>hashchange</code>\u4E8B\u4EF6\u6765\u5904\u7406\u8DEF\u7531\u53D8\u5316, \u800C <strong>History</strong>\u8DEF\u7531\u901A\u8FC7\u76D1\u542C<code>popstate</code>\u4E8B\u4EF6\u6765\u5904\u7406\u5386\u53F2\u8BB0\u5F55\u53D8\u5316\u3002</li><li>\u901A\u8FC7\u4FEE\u6539 <code>window.location.hash</code>\u53EF\u4EE5\u6539\u53D8 Hash \u8DEF\u7531\u7684\u7247\u6BB5\u6807\u8BC6\u7B26, \u901A\u8FC7 <code>window.history.pushState</code>\u6216<code>window.history.replaceState</code>\u53EF\u4EE5\u6539\u53D8 History \u8DEF\u7531\u7684 URL \u8DEF\u5F84\u3002</li></ul>',21),s=[a];function l(n,h,c,p,g,u){return o(),e("div",null,s)}const w=t(i,[["render",l]]);export{_ as __pageData,w as default};
