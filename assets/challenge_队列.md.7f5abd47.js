import{_ as s,c as n,o as a,a as l}from"./app.04f40ebf.js";const C=JSON.parse('{"title":"\u961F\u5217","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u961F\u5217","slug":"\u961F\u5217"}],"relativePath":"challenge/\u961F\u5217.md","lastUpdated":1689576202000}'),p={name:"challenge/\u961F\u5217.md"},o=l(`<h2 id="\u961F\u5217" tabindex="-1">\u961F\u5217 <a class="header-anchor" href="#\u961F\u5217" aria-hidden="true">#</a></h2><p><code>\u961F\u5217\uFF08Queue\uFF09</code> \u662F\u4E00\u79CD<code>\u5148\u8FDB\u5148\u51FA\uFF08FIFO\uFF0CFirst-In-First-Out\uFF09</code>\u7684\u7EBF\u6027\u8868\u3002 \u5728\u5177\u4F53\u5E94\u7528\u4E2D\u901A\u5E38\u7528<code>\u94FE\u8868\u6216\u8005\u6570\u7EC4</code>\u6765\u5B9E\u73B0\u3002\u961F\u5217\u53EA\u5141\u8BB8\u5728<code>\u540E\u7AEF\uFF08\u79F0\u4E3A rear\uFF09\u8FDB\u884C\u63D2\u5165\u64CD\u4F5C\uFF0C\u5728\u524D\u7AEF\uFF08\u79F0\u4E3A front\uFF09\u8FDB\u884C\u5220\u9664\u64CD\u4F5C</code>\u3002 \u961F\u5217\u7684\u5B66\u4E60\u53EF\u4EE5\u7C7B\u6BD4\u6808\u3002\u961F\u5217\u662F\u5B9E\u73B0<code>\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22</code>\u7684\u91CD\u8981\u6570\u636E\u7ED3\u6784\u3002</p><h4 id="\u5B57\u7B26\u4E32\u76F8\u52A0" tabindex="-1">\u5B57\u7B26\u4E32\u76F8\u52A0 <a class="header-anchor" href="#\u5B57\u7B26\u4E32\u76F8\u52A0" aria-hidden="true">#</a></h4><p>\u7ED9\u5B9A\u4E24\u4E2A\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684\u975E\u8D1F\u6574\u6570 num1 \u548C num2 \uFF0C\u8BA1\u7B97\u5B83\u4EEC\u7684\u548C\u5E76\u540C\u6837\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u8FD4\u56DE\u3002</p><p>\u4F60\u4E0D\u80FD\u4F7F\u7528\u4EFB\u4F55\u5167\u5EFA\u7684\u7528\u4E8E\u5904\u7406\u5927\u6574\u6570\u7684\u5E93\uFF08\u6BD4\u5982 BigInteger\uFF09\uFF0C \u4E5F\u4E0D\u80FD\u76F4\u63A5\u5C06\u8F93\u5165\u7684\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6574\u6570\u5F62\u5F0F\u3002</p><ul><li>\u601D\u8DEF: <ul><li>\u4F7F\u7528\u4E24\u4E2A\u6307\u9488 <code>i</code>\u548C<code>j</code>\u5206\u522B\u6307\u5411\u4E24\u4E2A\u5B57\u7B26\u4E32\u7684\u672B\u5C3E</li><li>\u5F53\u4E24\u4E2A\u6307\u9488\u5927\u4E8E\u7B49\u4E8E0\u6216\u8005\u8FDB\u4F4D\u53D8\u91CF\u5927\u4E8E0\u65F6\u8FDB\u884C\u5FAA\u73AF</li><li>\u8BA1\u7B97\u4E09\u6570\u4E4B\u548C(\u5305\u542B\u8FDB\u4F4D),</li><li>\u62FF\u5230<code>\u548C</code>\u540E\u505A\u4E24\u4EF6\u4E8B, 1. \u770B\u662F\u5426\u4EA7\u751F\u8FDB\u4F4D, 2. \u548C\u4E0A\u6B65\u5FAA\u73AF\u7ED3\u679C\u76F8\u52A0</li><li>\u5C06\u6307\u9488\u9012\u51CF</li><li>\u6700\u540E\u7B49\u5230\u7684<code>result</code>\u5373\u662F\u4E24\u6570\u4E4B\u548C</li></ul></li></ul><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">num1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;24&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">num2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;115&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">addStrings</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">num1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">num2</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">num1</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">j</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">num2</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">carry</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">result</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">j</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">carry</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">digit1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">parseInt</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">num1</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">]) </span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">digit2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">j</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">parseInt</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">num2</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">j</span><span style="color:#ABB2BF;">]) </span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">sum</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">digit1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">digit2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">carry</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">result</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">sum</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">%</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">result</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">carry</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Math</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">floor</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">sum</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">--</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">j</span><span style="color:#56B6C2;">--</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">result</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;addStrings(num1, num2) :&gt;&gt; &quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#61AFEF;">addStrings</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">num1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">num2</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,7),e=[o];function B(r,c,t,y,A,F){return a(),n("div",null,e)}const u=s(p,[["render",B]]);export{C as __pageData,u as default};
