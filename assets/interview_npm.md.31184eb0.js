import{_ as e,o,c as l,e as d}from"./app.a29da44c.js";const g=JSON.parse('{"title":"\u4ECB\u7ECD\u4E0B npm \u6A21\u5757\u5B89\u88C5\u673A\u5236\uFF0C\u4E3A\u4EC0\u4E48\u8F93\u5165 npm install \u5C31\u53EF\u4EE5\u81EA\u52A8\u5B89\u88C5\u5BF9\u5E94\u7684\u6A21\u5757\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD\u4E0B npm \u6A21\u5757\u5B89\u88C5\u673A\u5236\uFF0C\u4E3A\u4EC0\u4E48\u8F93\u5165 npm install \u5C31\u53EF\u4EE5\u81EA\u52A8\u5B89\u88C5\u5BF9\u5E94\u7684\u6A21\u5757\uFF1F","slug":"\u4ECB\u7ECD\u4E0B-npm-\u6A21\u5757\u5B89\u88C5\u673A\u5236\uFF0C\u4E3A\u4EC0\u4E48\u8F93\u5165-npm-install-\u5C31\u53EF\u4EE5\u81EA\u52A8\u5B89\u88C5\u5BF9\u5E94\u7684\u6A21\u5757\uFF1F"}],"relativePath":"interview/npm.md","lastUpdated":1711689236000}'),n={name:"interview/npm.md"},c=d('<h2 id="\u4ECB\u7ECD\u4E0B-npm-\u6A21\u5757\u5B89\u88C5\u673A\u5236\uFF0C\u4E3A\u4EC0\u4E48\u8F93\u5165-npm-install-\u5C31\u53EF\u4EE5\u81EA\u52A8\u5B89\u88C5\u5BF9\u5E94\u7684\u6A21\u5757\uFF1F" tabindex="-1">\u4ECB\u7ECD\u4E0B npm \u6A21\u5757\u5B89\u88C5\u673A\u5236\uFF0C\u4E3A\u4EC0\u4E48\u8F93\u5165 npm install \u5C31\u53EF\u4EE5\u81EA\u52A8\u5B89\u88C5\u5BF9\u5E94\u7684\u6A21\u5757\uFF1F <a class="header-anchor" href="#\u4ECB\u7ECD\u4E0B-npm-\u6A21\u5757\u5B89\u88C5\u673A\u5236\uFF0C\u4E3A\u4EC0\u4E48\u8F93\u5165-npm-install-\u5C31\u53EF\u4EE5\u81EA\u52A8\u5B89\u88C5\u5BF9\u5E94\u7684\u6A21\u5757\uFF1F" aria-hidden="true">#</a></h2><ol><li><strong>npm\u6A21\u5757\u5B89\u88C5\u673A\u5236</strong></li></ol><ul><li>\u53D1\u51FA<code>npm install</code>\u547D</li><li>\u67E5\u8BE2<code>node_modules</code>\u76EE\u5F55\u4E4B\u4E2D\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\u6307\u5B9A\u6A21\u5757 <ul><li>\u82E5\u5B58\u5728, \u4E0D\u518D\u91CD\u65B0\u5B89\u88C5</li><li>\u82E5\u4E0D\u5B58\u5728 <ul><li>npm\u5411<code>registry</code>\u67E5\u8BE2\u6A21\u5757\u538B\u7F29\u5305\u7684\u7F51\u5740</li><li>\u4E0B\u8F7D\u538B\u7F29\u5305, \u5B58\u653E\u5230\u6839\u76EE\u5F55\u4E0B\u7684<code>.npm</code>\u76EE\u5F55</li><li>\u89E3\u538B\u538B\u7F29\u5305\u5230\u5F53\u524D\u9879\u76EE\u7684<code>node_modules</code>\u76EE\u5F55</li></ul></li></ul></li></ul><ol start="2"><li><p><strong>npm\u5B9E\u73B0\u539F\u7406</strong> \u8F93\u5165<code>npm install</code>\u547D\u4EE4\u56DE\u7ECF\u5386\u5982\u4E0B\u51E0\u4E2A\u9636\u6BB5 2.1 <strong>\u6267\u884C\u5DE5\u7A0B\u81EA\u8EABpreinstall</strong></p><ul><li>\u5F53\u524D<code>npm</code>\u5DE5\u7A0B\u5982\u679C\u5B9A\u4E49\u4E86<code>preinstall</code>\u94A9\u5B50\u6B64\u65F6\u4F1A\u88AB\u6267\u884C 2.2 <strong>\u786E\u5B9A\u9996\u5C42\u4F9D\u8D56\u6A21\u5757</strong></li><li>\u9996\u5148\u9700\u8981\u505A\u7684\u662F\u786E\u5B9A\u5DE5\u7A0B\u4E2D\u7684\u9996\u5C42\u4F9D\u8D56, \u4E5F\u5C31\u662F<code>dependencies</code>\u548C<code>devDependencies</code>\u5C5E\u6027\u4E2D\u76F4\u63A5\u6307\u5B9A\u7684\u6A21\u5757(\u5047\u8BBE\u6B64\u65F6\u6CA1\u6709\u6DFB\u52A0<code>npm install</code>\u53C2\u6570)</li><li>\u5DE5\u7A0B\u672C\u8EAB\u662F\u6574\u9897\u4F9D\u8D56\u6811\u7684\u6839\u8282\u70B9, \u6BCF\u4E2A\u9996\u5C42\u4F9D\u8D56\u6A21\u5757\u90FD\u662F\u6839\u8282\u70B9\u4E0B\u7684\u4E00\u9897\u5B50\u6811, <code>npm</code>\u4F1A\u5F00\u542F\u591A\u8FDB\u7A0B\u4ECE\u6BCF\u4E2A\u9996\u5C42\u4F9D\u8D56\u6A21\u5757\u5F00\u59CB\u9010\u6B65\u5BFB\u627E\u66F4\u6DF1\u5C42\u7EA7\u7684\u8282\u70B9</li></ul></li><li><p><strong>\u83B7\u53D6\u6A21\u5757</strong> \u83B7\u53D6\u6A21\u5757\u662F\u4E00\u4E2A <code>\u9012\u5F52</code>\u7684\u8FC7\u7A0B, \u5206\u4E3A\u4EE5\u4E0B\u51E0\u6B65:</p></li></ol><ul><li>\u83B7\u53D6\u6A21\u5757\u4FE1\u606F. \u5728\u4E0B\u8F7D\u4E00\u4E2A\u6A21\u5757\u4E4B\u524D, \u9996\u5148\u8981\u786E\u5B9A\u5176\u7248\u672C, \u8FD9\u662F\u56E0\u4E3A <code>package.json</code>\u4E2D\u5F80\u5F80\u662F <code>semantic version</code>(\u8BED\u4E49\u5316\u7248\u672C). \u6B64\u65F6\u5982\u679C\u7248\u672C\u63CF\u8FF0\u6587\u4EF6<code>(npm-shrinkwrap.json)\u6216package-lock.json</code>\u4E2D\u6709\u8BE5\u6A21\u5757\u4FE1\u606F\u76F4\u63A5\u62FF\u5373\u53EF, \u5982\u679C\u6CA1\u6709\u5219\u4ECE\u4ED3\u5E93\u83B7\u53D6. \u5982<code>package.json</code>\u4E2D\u67D0\u4E2A\u5305\u7684\u7248\u672C\u662F<code>^1.1.0</code>, npm\u5C31\u4F1A\u53BB\u4ED3\u5E93\u4E2D\u83B7\u53D6\u7B26\u5408<code>1.x.x</code>\u5F62\u5F0F\u7684\u6700\u65B0\u7248\u672C</li><li>\u83B7\u53D6\u6A21\u5757\u5B9E\u4F53. \u4E0A\u4E00\u6B65\u4F1A\u83B7\u53D6\u5230\u6A21\u5757\u7684\u538B\u7F29\u5305\u5730\u5740<code>(resolved)\u5B57\u6BB5</code>, npm\u4F1A\u7528\u6B64\u5730\u5740\u68C0\u67E5\u672C\u5730\u7F13\u5B58, \u7F13\u5B58\u4E2D\u6709\u5C31\u76F4\u63A5\u62FF, \u6CA1\u6709\u5219\u4ECE\u4ED3\u5E93\u4E0B\u8F7D</li><li>\u67E5\u627E\u8BE5\u6A21\u5757\u4F9D\u8D56, \u5982\u679C\u6709\u4F9D\u8D56\u5219\u56DE\u5230\u7B2C\u4E00\u6B65, \u6CA1\u6709\u5C31\u505C\u6B62</li></ul><ol start="4"><li><strong>\u6A21\u5757\u6241\u5E73\u5316</strong> \u4E0A\u4E00\u6B65\u83B7\u53D6\u5230\u7684\u662F\u4E00\u9897\u5B8C\u6574\u7684\u4F9D\u8D56\u6811, \u5176\u4E2D\u53EF\u80FD\u5305\u542B\u5927\u91CF\u91CD\u590D\u6A21\u5757, \u5982A\u6A21\u5757\u4F9D\u8D56\u4E8E<code>lodash</code>, B\u6A21\u5757\u4E5F\u4F9D\u8D56\u4E8E<code>lodash</code>. <code>\u5728npm3</code>\u4EE5\u524D\u4F1A\u4E25\u683C\u6309\u7167\u4F9D\u8D56\u6811\u7684\u7ED3\u6784\u8FDB\u884C\u5B89\u88C5, \u56E0\u6B64\u4F1A\u9020\u6210\u6A21\u5757\u5197\u4F59</li></ol><p>\u4ECE<code>npm3</code>\u5F00\u59CB\u9ED8\u8BA4\u52A0\u5165\u4E86\u4E00\u4E2A<code>dedupe</code>\u7684\u8FC7\u7A0B. \u5B83\u4F1A\u904D\u5386\u6240\u6709\u7684\u8282\u70B9, \u9010\u4E2A\u5C06\u6A21\u5757\u653E\u5728\u6839\u8282\u70B9\u4E0B\u9762, \u4E5F\u5C31\u662F<code>node_modules</code>\u7684\u7B2C\u4E00\u5C42, \u5F53\u53D1\u73B0\u6709<code>\u91CD\u590D</code>\u7684\u6A21\u5757\u65F6, \u5219\u5C06\u5176\u4E22\u5F03</p><p>\u91CD\u590D\u6A21\u5757\u5B9A\u4E49: (<code>\u6A21\u5757\u540D\u76F8\u540C\u4E14semver\u517C\u5BB9</code>).\u6BCF\u4E2A<code>semver\u90FD\u5BF9\u5E94\u4E00\u6BB5\u7248\u672C\u5141\u8BB8\u8303\u56F4,\u5982\u679C\u4E24\u4E2A\u6A21\u5757\u7684\u7248\u672C\u5141\u8BB8\u8303\u56F4\u5B58\u5728\u4EA4\u96C6, \u90A3\u4E48\u5C31\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A\u517C\u5BB9\u7248\u672C</code>, \u800C\u4E0D\u5FC5\u7248\u672C\u53F7\u5B8C\u5168\u4E00\u81F4, \u8FD9\u53EF\u4EE5\u4F7F\u66F4\u591A\u5197\u4F59\u6A21\u5757\u5728<code>dedupe</code>\u8FC7\u7A0B\u4E2D\u88AB\u5F03\u6389</p><p>\u5047\u8BBE version1 \u548C version2 \u662F\u517C\u5BB9\u7248\u672C\uFF0C\u5219\u7ECF\u8FC7 dedupe \u4F1A\u6210\u4E3A\u4E0B\u9762\u7684\u5F62\u5F0F\uFF1A<br><code>node_modules</code></p><ul><li>foo</li><li>bar <ul><li>lodash\uFF08\u4FDD\u7559\u7684\u7248\u672C\u4E3A\u517C\u5BB9\u7248\u672C\uFF09</li></ul></li></ul><p>\u5047\u8BBE version1 \u548C version2 \u4E3A\u975E\u517C\u5BB9\u7248\u672C\uFF0C\u5219\u540E\u9762\u7684\u7248\u672C\u4FDD\u7559\u5728\u4F9D\u8D56\u6811\u4E2D\uFF1A</p><p><code>node_modules</code></p><ul><li><p>foo</p><ul><li>lodash@version1</li></ul></li><li><p>bar</p><ul><li>lodash@version2</li></ul></li></ul><ol start="5"><li><p><strong>\u5B89\u88C5\u6A21\u5757</strong> \u8FD9\u4E00\u6B65\u5C06\u4F1A\u66F4\u65B0\u5DE5\u7A0B\u4E2D\u7684<code>node_modules</code>, \u5E76\u6267\u884C\u6A21\u5757\u4E2D\u7684<code>\u751F\u547D\u5468\u671F\u51FD\u6570</code>. (\u6309\u7167<code>preinstall</code>, <code>install</code>, <code>postinstall</code>\u7684\u987A\u5E8F)</p></li><li><p><strong>\u6267\u884C\u5DE5\u7A0B\u81EA\u8EAB\u751F\u547D\u5468\u671F</strong> \u5F53\u524D <code>npm</code>\u5DE5\u7A0B\u5982\u679C\u5B9A\u4E49\u4E86\u94A9\u5B50\u6B64\u65F6\u4F1A\u88AB\u6267\u884C (\u6309\u7167<code>install</code>, <code>postinstall</code>, <code>prepublish</code>, <code>prepare</code>\u7684\u987A\u5E8F)</p></li><li><p>\u751F\u6210\u6216\u8005\u66F4\u65B0\u7248\u672C\u63CF\u8FF0\u6587\u4EF6, <code>npm install</code>\u8FC7\u7A0B\u5B8C\u6210</p></li><li><p>\u53C2\u8003\u6587\u732E:</p></li></ol><ul><li><a href="https://www.ruanyifeng.com/blog/2016/01/npm-install.html" target="_blank" rel="noreferrer">npm-install</a></li></ul>',15),i=[c];function s(p,t,r,a,m,u){return o(),l("div",null,i)}const h=e(n,[["render",s]]);export{g as __pageData,h as default};
