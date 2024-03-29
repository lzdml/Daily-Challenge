import{_ as s,o as n,c as a,e as l}from"./app.a29da44c.js";const b=JSON.parse('{"title":"typeof","description":"","frontmatter":{},"headers":[{"level":2,"title":"typeof","slug":"typeof"},{"level":3,"title":"instanceof \u7684\u5185\u90E8\u5B9E\u73B0\u539F\u7406","slug":"instanceof-\u7684\u5185\u90E8\u5B9E\u73B0\u539F\u7406"},{"level":3,"title":"Object.prototype.toString()","slug":"object-prototype-tostring"},{"level":3,"title":"[[class]]","slug":"class"},{"level":3,"title":"\u603B\u7ED3:","slug":"\u603B\u7ED3"}],"relativePath":"interview/index.md","lastUpdated":1711689236000}'),p={name:"interview/index.md"},o=l(`<h2 id="typeof" tabindex="-1">typeof <a class="header-anchor" href="#typeof" aria-hidden="true">#</a></h2><p><strong>typeof</strong> \u64CD\u4F5C\u7B26\u552F\u4E00\u7684\u76EE\u7684\u5C31\u662F\u68C0\u67E5\u6570\u636E\u7C7B\u578B</p><table><thead><tr><th></th><th>\u7C7B\u578B</th><th>typeof \u7ED3\u679C</th></tr></thead><tbody><tr><td>\u57FA\u672C\u7C7B\u578B</td><td>undefined</td><td><code>undefined</code></td></tr><tr><td></td><td>Boolean</td><td><code>boolean</code></td></tr><tr><td></td><td>Number</td><td><code>number</code></td></tr><tr><td></td><td>String</td><td><code>string</code></td></tr><tr><td></td><td>Symbol</td><td><code>symbol</code></td></tr><tr><td></td><td>BigInt</td><td><code>bigint</code></td></tr><tr><td></td><td>null</td><td><code>object</code></td></tr><tr><td>\u5F15\u7528\u7C7B\u578B</td><td>Object(Object, Array, Map, Set, Regexp, Date \u7B49)</td><td><code>object</code></td></tr><tr><td></td><td>Function</td><td><code>function</code></td></tr></tbody></table><p>\u4F60\u4F1A\u53D1\u73B0\u7528<strong>typeof</strong>\u6765\u5224\u65AD<strong>\u5F15\u7528\u7C7B\u578B</strong>\u65F6, \u90FD\u4F1A\u8FD4\u56DE <strong>&#39;object&#39;</strong> . \u4E3A\u6B64, \u5F15\u5165\u4E86 <strong>instanceof</strong></p><p><strong>instanceof</strong> \u8FD0\u7B97\u7B26\u7528\u4E8E\u68C0\u6D4B\u6784\u9020\u51FD\u6570\u7684 <strong>prototype</strong> \u5C5E\u6027\u662F\u5426\u51FA\u73B0\u5728\u67D0\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">instanceof</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Array</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;">// true</span></span>
<span class="line"><span style="color:#C678DD;">typeof</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;">// &quot;object&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">A</span><span style="color:#ABB2BF;">() {}</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">B</span><span style="color:#ABB2BF;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// Javascript \u7EE7\u627F</span></span>
<span class="line"><span style="color:#E5C07B;">B</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">A</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">B</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">instanceof</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;">// true</span></span>
<span class="line"><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">instanceof</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">B</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="instanceof-\u7684\u5185\u90E8\u5B9E\u73B0\u539F\u7406" tabindex="-1">instanceof \u7684\u5185\u90E8\u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#instanceof-\u7684\u5185\u90E8\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h3><ul><li>\u601D\u8DEF: \u5229\u7528 <strong>\u539F\u578B\u548C\u539F\u578B\u94FE</strong>, \u6BCF\u4E00\u4E2A\u51FD\u6570\u90FD\u6709\u4E00\u4E2A\u663E\u5F0F\u7684 <strong>prototype</strong>, \u6BCF\u4E00\u4E2A\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A\u9690\u5F0F\u539F\u578B *<strong>*proto**</strong>, \u5F53\u6211\u4EEC\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E2D\u5B58\u5728\u6784\u9020\u51FD\u6570\u7684\u663E\u5F0F\u539F\u578B <strong>prototype</strong>\u65F6, \u6211\u4EEC\u5C31\u53EF\u4EE5\u786E\u5B9A\u5B83\u4EEC\u4E4B\u95F4\u5B58\u5728\u5173\u7CFB;</li></ul><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">myInstanceOf</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">constructor</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">instance</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">constructor</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">proto</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">instance</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">__proto__</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;">// \u8BF4\u660E\u9053\u539F\u578B\u94FE\u8BA2\u5355, \u8FD8\u672A\u627E\u5230, \u8FD4\u56DE false</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">proto</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">proto</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;">// \u7EE7\u7EED\u5411 proto \u7684\u539F\u578B\u94FE\u4E0A\u904D\u5386</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">proto</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getPrototypeOf</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">proto</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="object-prototype-tostring" tabindex="-1">Object.prototype.toString() <a class="header-anchor" href="#object-prototype-tostring" aria-hidden="true">#</a></h3><ul><li>toString() \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u8868\u793A\u8BE5\u5BF9\u8C61\u7684\u5B57\u7B26\u4E32\u3002\u8BE5\u65B9\u6CD5\u65E8\u5728\u91CD\u5199\uFF08\u81EA\u5B9A\u4E49\uFF09\u6D3E\u751F\u7C7B\u5BF9\u8C61\u7684\u7C7B\u578B\u8F6C\u6362\u7684\u903B\u8F91\u3002</li><li>valueOf() \u65B9\u6CD5\u8FD4\u56DE\u5BF9\u8C61\u7684\u539F\u59CB\u503C\u8868\u793A</li></ul><p>\u8BE5\u65B9\u6CD5\u7531 <strong>\u5B57\u7B26\u4E32\u8F6C\u6362</strong>\u4F18\u5148\u8C03\u7528, \u4F46\u662F <strong>\u6570\u5B57\u7684\u5F3A\u5236\u8F6C\u6362</strong>\u548C<strong>\u539F\u59CB\u503C\u7684\u5F3A\u5236\u8F6C\u6362</strong> \u4F1A\u4F18\u5148\u8C03\u7528 <strong>valueOf</strong>, \u56E0\u4E3A\u57FA\u672C\u7684 <strong>valueOf()</strong> \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C<strong>toString()</strong> \u65B9\u6CD5\u901A\u5E38\u5728\u7ED3\u675F\u65F6\u8C03\u7528</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B(\u4E0D\u91CD\u5199 <strong>toString</strong>\u65B9\u6CD5), \u4EFB\u4F55\u4E00\u4E2A\u5BF9\u8C61\u8C03\u7528 <strong>Object</strong>\u539F\u751F\u7684 <strong>toString</strong>\u65B9\u6CD5, \u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2A <code>[object type]</code>, \u5176\u4E2D <strong>type</strong>\u662F\u5BF9\u8C61\u7684\u7C7B\u578B</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;">// {}</span></span>
<span class="line"><span style="color:#E5C07B;">a</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;">(); </span><span style="color:#7F848E;">// &quot;[object Object]&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="class" tabindex="-1">[[class]] <a class="header-anchor" href="#class" aria-hidden="true">#</a></h3><p>\u6BCF\u4E2A <strong>\u5B9E\u4F8B</strong> \u90FD\u6709\u4E00\u4E2A [[Class]] \u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u4E2D\u5C31\u6307\u5B9A\u4E86\u4E0A\u8FF0\u5B57\u7B26\u4E32\u4E2D\u7684 type \u3002 [[Class]] \u4E0D\u80FD\u76F4\u63A5\u5730\u88AB\u8BBF\u95EE\uFF0C\u4F46\u901A\u5E38\u53EF\u4EE5\u901A\u8FC7 <strong>Object.prototype.toString.call(..)</strong> \u65B9\u6CD5\u8C03\u7528\u6765\u5C55\u793A\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#7F848E;">// Boolean \u7C7B\u578B\uFF0Ctag \u4E3A &quot;Boolean&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">toString</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">call</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;">// =&gt; &quot;[object Boolean]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// Number \u7C7B\u578B\uFF0Ctag \u4E3A &quot;Number&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">toString</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">call</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;">// =&gt; &quot;[object Boolean]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// String \u7C7B\u578B\uFF0Ctag \u4E3A &quot;String&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">toString</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">call</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;">// =&gt; &quot;[object String]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// Array \u7C7B\u578B\uFF0Ctag \u4E3A &quot;String&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">toString</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">call</span><span style="color:#ABB2BF;">([]); </span><span style="color:#7F848E;">// =&gt; &quot;[object Array]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// Arguments \u7C7B\u578B\uFF0Ctag \u4E3A &quot;Arguments&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">toString</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">call</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">  (</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arguments</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  })()</span></span>
<span class="line"><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;">// =&gt; &quot;[object Arguments]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// Function \u7C7B\u578B\uFF0C tag \u4E3A &quot;Function&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">toString</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">call</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {}); </span><span style="color:#7F848E;">// =&gt; &quot;[object Function]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// Error \u7C7B\u578B\uFF08\u5305\u542B\u5B50\u7C7B\u578B\uFF09\uFF0Ctag \u4E3A &quot;Error&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">toString</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">call</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Error</span><span style="color:#ABB2BF;">()); </span><span style="color:#7F848E;">// =&gt; &quot;[object Error]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// RegExp \u7C7B\u578B\uFF0Ctag \u4E3A &quot;RegExp&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">toString</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">call</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/\\d</span><span style="color:#D19A66;">+</span><span style="color:#E06C75;">/</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;">// =&gt; &quot;[object RegExp]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// Date \u7C7B\u578B\uFF0Ctag \u4E3A &quot;Date&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">toString</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">call</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Date</span><span style="color:#ABB2BF;">()); </span><span style="color:#7F848E;">// =&gt; &quot;[object Date]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// \u5176\u4ED6\u7C7B\u578B\uFF0Ctag \u4E3A &quot;Object&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">toString</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">call</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> {})()); </span><span style="color:#7F848E;">// =&gt; &quot;[object Object]&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u6240\u4EE5\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u65B9\u6CD5\u6765\u5224\u65AD\u6BCF\u4E2A\u5BF9\u8C61\u7684\u7C7B\u578B</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">generator</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">toString</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">call</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;[object &quot;</span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#98C379;">&quot;]&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">isFunction</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">generator</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Function&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">isArray</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">generator</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Array&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">isDate</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">generator</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Date&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">isRegExp</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">generator</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;RegExp&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">isArray</span><span style="color:#ABB2BF;">([]);    </span><span style="color:#7F848E;">// true</span></span>
<span class="line"><span style="color:#61AFEF;">isDate</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Date</span><span style="color:#ABB2BF;">()); </span><span style="color:#7F848E;">// true</span></span>
<span class="line"><span style="color:#61AFEF;">isRegExp</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/\\w/</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;">// true</span></span>
<span class="line"><span style="color:#61AFEF;">isFunction</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){}); </span><span style="color:#7F848E;">//true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u4EE5\u4E0B\u662F\u4E00\u9053\u7B80\u5355\u7684\u9762\u8BD5\u9898</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> [</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> [</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> [[</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;">]];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// \u62C6\u5206\u4E00\u4E0B</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> [</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#7F848E;">// [2]\u4F1A\u9996\u5148\u8FDB\u884C\u8F6C\u6362 [2].valueOf, \u7ED3\u679C\u4E0D\u662F\u57FA\u672C\u7C7B\u578B, [2]\u5728\u8C03\u7528toString(), \u8FD4\u56DE&#39;2&#39;, \u6700\u540E 1 + &#39;2&#39; + 3, 1,3\u8FDB\u884C\u9690\u5F0F\u8F6C\u6362, +&#39;123&#39; ==&gt; 123</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#7F848E;">// [3+true-false], true, false\u4F1A\u8FDB\u884C\u8F6C\u6362, true=&gt;1, false=&gt;0, \u6700\u540E1-0==&gt;[1+3]==&gt;[4]==&gt;[4].valueOf().toString()==&gt;&#39;4&#39;</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">c</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [[</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;">]];</span></span>
<span class="line"><span style="color:#7F848E;">// \u5148\u8F6C\u6362\u6570\u7EC4\u91CC\u9762\u7684\u4E00\u5C42, [3-0+&#39;1&#39;]==&gt;[&#39;31&#39;], \u7ED3\u679C: [[&#39;31&#39;]]==&gt;[[&#39;31&#39;]].valueOf().toString()==&gt;&#39;31&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// \u6700\u540E a+b+c</span></span>
<span class="line"><span style="color:#7F848E;">// 123+&#39;4&#39;+&#39;31&#39;==&gt;123431</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u9762\u8BD5\u9898\u76EE, \u5982\u4F55\u540C\u65F6\u8BA9\u7B49\u5F0F\u6210\u7ACB, a===1&amp;&amp;a===2&amp;&amp;a===3</p><ul><li>\u601D\u8DEF: \u91CD\u5199 a \u7684 valueOf \u65B9\u6CD5</li></ul><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: [</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">valueOf</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">value</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">pop</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3: <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h3><ul><li>\u5F53\u4E00\u4FA7\u4E3A String \u7C7B\u578B\uFF0C\u88AB\u8BC6\u522B\u4E3A\u5B57\u7B26\u4E32\u62FC\u63A5\uFF0C\u5E76\u4F1A\u4F18\u5148\u5C06\u53E6\u4E00\u4FA7\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\u3002</li><li>\u5F53\u4E00\u4FA7\u4E3A Number \u7C7B\u578B\uFF0C\u53E6\u4E00\u4FA7\u4E3A\u539F\u59CB\u7C7B\u578B\uFF0C\u5219\u5C06\u539F\u59CB\u7C7B\u578B\u8F6C\u6362\u4E3A Number \u7C7B\u578B\u3002</li><li>\u5F53\u4E00\u4FA7\u4E3A Number \u7C7B\u578B\uFF0C\u53E6\u4E00\u4FA7\u4E3A\u5F15\u7528\u7C7B\u578B\uFF0C\u5C06\u5F15\u7528\u7C7B\u578B\u548C Number \u7C7B\u578B\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\u540E\u62FC\u63A5\u3002</li><li>\u53EA\u6709 null undefined &#39;&#39; NaN 0 false \u8FD9\u51E0\u4E2A\u662F false\uFF0C\u5176\u4ED6\u7684\u60C5\u51B5\u90FD\u662F true\uFF0C\u6BD4\u5982 {} , []\u3002</li></ul>`,26),e=[o];function t(r,c,B,y,i,F){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{b as __pageData,u as default};