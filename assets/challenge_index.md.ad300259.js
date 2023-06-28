import{_ as s,c as n,o as a,a as l}from"./app.f5073715.js";const b=JSON.parse('{"title":"\u6808","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6808","slug":"\u6808"},{"level":3,"title":"\u6709\u6548\u7684\u62EC\u53F7","slug":"\u6709\u6548\u7684\u62EC\u53F7"}],"relativePath":"challenge/index.md","lastUpdated":1687937423000}'),p={name:"challenge/index.md"},o=l(`<h2 id="\u6808" tabindex="-1">\u6808 <a class="header-anchor" href="#\u6808" aria-hidden="true">#</a></h2><p>\u6808\u662F\u4E00\u79CD\u5177\u6709\u7279\u5B9A\u884C\u4E3A\u7684\u7EBF\u6027\u6570\u636E\u7ED3\u6784\uFF0C\u9075\u5FAA <strong>\u540E\u8FDB\u5148\u51FA\uFF08LIFO\uFF09</strong> \u7684\u539F\u5219\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6700\u540E\u653E\u5165\u6808\u7684\u5143\u7D20\u6700\u5148\u88AB\u53D6\u51FA\u3002\u6808\u7684\u7279\u70B9\u662F\u53EA\u80FD\u5728\u6808\u9876\u8FDB\u884C\u63D2\u5165\uFF08\u538B\u6808\uFF09\u548C\u5220\u9664\uFF08\u5F39\u6808\uFF09\u64CD\u4F5C\uFF0C\u5176\u4ED6\u4F4D\u7F6E\u7684\u5143\u7D20\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u3002\u7C7B\u6BD4\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u6808\uFF0C\u53EF\u4EE5\u5C06\u5176\u770B\u4F5C\u662F\u4E00\u645E\u76D8\u5B50\uFF0C\u6700\u540E\u653E\u5165\u7684\u76D8\u5B50\u6700\u5148\u88AB\u53D6\u51FA\u3002</p><h3 id="\u6709\u6548\u7684\u62EC\u53F7" tabindex="-1">\u6709\u6548\u7684\u62EC\u53F7 <a class="header-anchor" href="#\u6709\u6548\u7684\u62EC\u53F7" aria-hidden="true">#</a></h3><p>\u6700\u4F18\u89E3\uFF1A\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(n)\uFF0C\u5176\u4E2Dn\u662F\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u3002\u7A7A\u95F4\u590D\u6742\u5EA6\u4E3AO(n)\uFF0C\u9700\u8981\u4F7F\u7528\u6808\u6765\u5B58\u50A8\u62EC\u53F7\u5B57\u7B26\u3002</p><p>\u601D\u8DEF\uFF1A\u4F7F\u7528\u6808\u6765\u5224\u65AD\u62EC\u53F7\u5B57\u7B26\u4E32\u662F\u5426\u6709\u6548\u3002\u904D\u5386\u5B57\u7B26\u4E32\u7684\u6BCF\u4E2A\u5B57\u7B26\uFF0C\u5224\u65AD\u5982\u679C\u5728Map\u4E2D\u4E0D\u5B58\u5728\u8BE5\u5B57\u7B26\u4E32, \u4E0D\u5B58\u5728\u5C06\u5F00\u62EC\u53F7\u538B\u5165\u6808\u4E2D, \u9047\u5230\u95ED\u62EC\u53F7, \u5F39\u51FA\u6808\u9876\u5143\u7D20(\u4E5F\u5C31\u662F\u5F00\u62EC\u53F7), \u5224\u65AD\u662F\u5426\u548CMap\u4E2D\u7684\u5143\u7D20\u76F8\u540C, \u4E0D\u76F8\u7B49\u8FD4\u56DEfalse, \u6700\u540E\u5224\u65AD\u6808\u7684\u957F\u5EA6\u662F\u5426\u4E3A\u7A7A</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">isValid</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">s</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">stack</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">bracketMap</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Map</span><span style="color:#ABB2BF;">([</span></span>
<span class="line"><span style="color:#ABB2BF;">    [</span><span style="color:#98C379;">&quot;}&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;{&quot;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">    [</span><span style="color:#98C379;">&quot;]&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;[&quot;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">    [</span><span style="color:#98C379;">&quot;)&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;(&quot;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">  ]);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">s</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">%</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">of</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">s</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">bracketMap</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">has</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">char</span><span style="color:#ABB2BF;">)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">top</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">stack</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">pop</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">top</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!==</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">bracketMap</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">char</span><span style="color:#ABB2BF;">)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">stack</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">char</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">stack</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,6),e=[o];function B(r,c,t,y,A,F){return a(),n("div",null,e)}const u=s(p,[["render",B]]);export{b as __pageData,u as default};
