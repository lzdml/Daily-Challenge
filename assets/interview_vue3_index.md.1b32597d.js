import{_ as s,c as n,o as a,a as l}from"./app.f65457c0.js";const A=JSON.parse('{"title":"vue3 \u505A\u4E86\u54EA\u4E9B\u4F18\u5316","description":"","frontmatter":{},"headers":[{"level":3,"title":"vue3 \u505A\u4E86\u54EA\u4E9B\u4F18\u5316","slug":"vue3-\u505A\u4E86\u54EA\u4E9B\u4F18\u5316"}],"relativePath":"interview/vue3/index.md","lastUpdated":1689609148000}'),p={name:"interview/vue3/index.md"},o=l(`<h3 id="vue3-\u505A\u4E86\u54EA\u4E9B\u4F18\u5316" tabindex="-1">vue3 \u505A\u4E86\u54EA\u4E9B\u4F18\u5316 <a class="header-anchor" href="#vue3-\u505A\u4E86\u54EA\u4E9B\u4F18\u5316" aria-hidden="true">#</a></h3><p>\u901A\u5E38\u4F7F\u7528<code>vue2</code>\u5F00\u53D1\u7684\u9879\u76EE, \u666E\u904D\u4F1A\u5B58\u5728\u4EE5\u4E0B\u95EE\u9898</p><ul><li>\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u968F\u7740\u7EC4\u4EF6\u53D8\u5927\u800C\u53D8\u5DEE</li><li>\u6BCF\u4E00\u79CD\u4EE3\u7801\u590D\u7528\u7684\u65B9\u5F0F, \u90FD\u5B58\u5728\u7F3A\u70B9</li><li>TypeScript \u652F\u6301\u6709\u9650</li></ul><p>\u6240\u4EE5<code>vue3</code>\u7684<code>Composition Api</code>\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898</p><details class="details custom-block"><summary>vue2/vue3 \u8BED\u6CD5</summary><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#7F848E;">// vue2 options api</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    };</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">computed</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">double</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">methods</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">handleCount</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">~~</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// vue3 hook</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useCount</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ref</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">double</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">computed</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">count</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">handleCount</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">count</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">count</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">double</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">handleCount</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div></details><hr><p><strong>\u901F\u5EA6\u66F4\u5FEB</strong><code>vue3</code>\u76F8\u6BD4<code>vue2</code></p><ul><li>\u91CD\u5199\u4E86\u865A\u62DF<code>dom</code></li><li>\u7F16\u8BD1\u6A21\u7248\u7684\u4F18\u5316</li><li>\u66F4\u9AD8\u6548\u7684\u7EC4\u4EF6\u521D\u59CB\u5316</li><li>\u6027\u80FD\u63D0\u9AD8<code>1.3-2</code>\u500D</li><li><code>SSR</code>\u901F\u5EA6\u63D0\u9AD8\u4E86<code>2-3</code>\u500D</li></ul><hr><p><strong>\u4F53\u79EF\u66F4\u5C0F</strong></p><ul><li><p>\u901A\u8FC7<code>webpack</code>\u7684<code>tree-shaking</code>\u529F\u80FD, \u53EF\u4EE5\u5C06\u65E0\u7528\u6A21\u5757\u6447\u6389, \u4EC5\u6253\u5305\u9700\u8981\u7684, <code>tree-shaking</code>\u662F\u57FA\u4E8E<code>ES6</code>\u6A21\u7248\u8BED\u6CD5(<code>import</code>\u4E0E<code>exports</code>), \u4E3B\u8981\u662F\u501F\u52A9<code>ES6</code>\u6A21\u5757\u7684\u9759\u6001\u7F16\u8BD1\u601D\u60F3, \u5728\u7F16\u8BD1\u65F6\u5C31\u80FD\u786E\u5B9A\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB, \u4EE5\u53CA\u8F93\u5165\u548C\u8F93\u51FA\u7684\u53D8\u91CF</p><p><code>tree-shaking</code>\u65E0\u975E\u5C31\u662F\u505A\u4E86\u4E24\u4EF6\u4E8B</p><ul><li>\u7F16\u8BD1\u9636\u6BB5\u5229\u7528 <code>ES6 Module</code>\u5224\u65AD\u54EA\u4E9B\u6A21\u5757\u5DF2\u7ECF\u52A0\u8F7D</li><li>\u5224\u65AD\u54EA\u4E9B\u6A21\u578B\u548C\u53D8\u91CF\u672A\u88AB\u5F15\u7528\u6216\u4F7F\u7528, \u8FDB\u800C\u5220\u9664\u5BF9\u5E94\u4EE3\u7801</li></ul></li></ul><hr><p><strong>\u66F4\u597D\u7684\u667A\u80FD\u63D0\u793A</strong></p><ul><li><code>vue3</code>\u662F\u57FA\u4E8E<code>typescript</code>\u7F16\u5199\u7684, \u53EF\u4EE5\u4EAB\u53D7\u5230\u81EA\u52A8\u7684\u7C7B\u578B\u5B9A\u4E49\u63D0\u793A</li></ul><hr><p><strong>\u66F4\u6613\u7EF4\u62A4, \u66F4\u63A5\u8FD1\u539F\u751F<code>javascript</code></strong></p><ul><li><code>composition api</code></li><li>\u53EF\u4E0E\u73B0\u6709\u7684<code>options api</code>\u4E00\u8D77\u4F7F\u7528</li><li>\u7075\u6D3B\u7684\u903B\u8F91\u7EC4\u4EF6\u548C\u590D\u7528</li><li><code>vue3</code>\u7684\u5355\u72EC\u6A21\u5757\u53EF\u4EE5\u548C\u5176\u4ED6\u6846\u67B6\u642D\u914D\u4F7F\u7528</li></ul><hr><p><strong>\u54CD\u5E94\u5F0F\u7CFB\u7EDF</strong></p><ul><li><p><code>vue2</code>\u4E2D\u91C7\u7528<code>defineProperty</code>\u6765\u52AB\u6301\u6574\u4E2A\u5BF9\u8C61, \u7136\u540E\u8FDB\u884C\u6DF1\u5EA6\u904D\u5386\u6240\u6709\u5C5E\u6027, \u7ED9\u6BCF\u4E2A\u5C5E\u6027\u6DFB\u52A0<code>getter</code>\u548C<code>setter</code>, \u5B9E\u73B0\u54CD\u5E94\u5F0F, \u4E0D\u80FD\u76D1\u542C\u5BF9\u8C61\u5C5E\u6027\u7684\u6DFB\u52A0\u548C\u5220\u9664, \u867D\u7136<code>vue2</code>\u63D0\u4F9B\u4E86<code>$set</code>\u548C<code>$get</code></p></li><li><p><code>vue3</code>\u91C7\u7528<code>proxy</code>\u91CD\u5199\u54CD\u5E94\u5F0F\u7CFB\u7EDF, \u56E0\u4E3A<code>proxy</code>\u53EF\u4EE5\u5BF9\u6574\u4E2A\u5BF9\u8C61\u8FDB\u884C\u76D1\u542C, \u6240\u4EE5\u4E0D\u9700\u8981\u6DF1\u5EA6\u904D\u5386</p><ul><li>\u53EF\u4EE5\u76D1\u542C\u52A8\u6001\u5C5E\u6027\u7684\u6DFB\u52A0</li><li>\u53EF\u4EE5\u76D1\u542C\u5230\u6570\u7EC4\u7684\u7D22\u5F15\u548C\u6570\u7EC4<code>length</code>\u5C5E\u6027</li><li>\u53EF\u4EE5\u76D1\u542C\u5220\u9664\u5C5E\u6027</li></ul></li></ul>`,20),e=[o];function c(r,B,t,i,y,d){return a(),n("div",null,e)}const F=s(p,[["render",c]]);export{A as __pageData,F as default};