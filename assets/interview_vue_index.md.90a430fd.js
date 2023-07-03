import{_ as e,c as l,o as t,a as i}from"./app.f9920aa1.js";const g=JSON.parse('{"title":"Vue \u6838\u5FC3\u7279\u6027","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue \u6838\u5FC3\u7279\u6027","slug":"vue-\u6838\u5FC3\u7279\u6027"},{"level":3,"title":"\u6570\u636E\u9A71\u52A8 (MVVM)","slug":"\u6570\u636E\u9A71\u52A8-mvvm"},{"level":3,"title":"\u7EC4\u4EF6\u5316","slug":"\u7EC4\u4EF6\u5316"},{"level":3,"title":"Vue \u548C React \u5BF9\u6BD4","slug":"vue-\u548C-react-\u5BF9\u6BD4"},{"level":3,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E"}],"relativePath":"interview/vue/index.md","lastUpdated":1688390736000}'),a={name:"interview/vue/index.md"},r=i('<h2 id="vue-\u6838\u5FC3\u7279\u6027" tabindex="-1">Vue \u6838\u5FC3\u7279\u6027 <a class="header-anchor" href="#vue-\u6838\u5FC3\u7279\u6027" aria-hidden="true">#</a></h2><hr><h3 id="\u6570\u636E\u9A71\u52A8-mvvm" tabindex="-1">\u6570\u636E\u9A71\u52A8 (MVVM) <a class="header-anchor" href="#\u6570\u636E\u9A71\u52A8-mvvm" aria-hidden="true">#</a></h3><p><strong>MVVM</strong> \u8868\u793A\u7684\u662F <strong>Model-View-ViewModel</strong></p><ul><li>Model: \u6A21\u578B\u5C42, \u8D1F\u8D23\u5904\u7406\u4E1A\u52A1\u903B\u8F91\u4EE5\u53CA\u548C\u670D\u52A1\u7AEF\u8FDB\u884C\u4EA4\u4E92</li><li>View: \u89C6\u56FE\u5C42, \u8D1F\u8D23\u5C06\u6570\u636E\u6A21\u578B\u8F6C\u5316\u4E3A UI \u5C55\u793A\u51FA\u6765, \u53EF\u4EE5\u7406\u89E3\u4E3A HTML \u9875\u9762</li><li>ViewModel: \u89C6\u56FE\u6A21\u578B\u5C42, \u7528\u6765\u94FE\u63A5 Model \u548C View, \u662F\u4E24\u8005\u901A\u4FE1\u7684\u6865\u6881</li></ul><h3 id="\u7EC4\u4EF6\u5316" tabindex="-1">\u7EC4\u4EF6\u5316 <a class="header-anchor" href="#\u7EC4\u4EF6\u5316" aria-hidden="true">#</a></h3><ol><li><p>\u7EC4\u4EF6\u5316\u5C31\u662F\u628A HTML, CSS, JS \u5404\u79CD\u903B\u8F91\u62BD\u8C61\u6210\u4E00\u4E2A\u7EDF\u4E00\u7684\u6982\u5FF5\u6765\u5B9E\u73B0\u5F00\u53D1\u7684\u6A21\u5F0F</p></li><li><p>\u7EC4\u4EF6\u5316\u7684\u4F18\u52BF</p></li></ol><ul><li>\u964D\u4F4E\u6574\u4E2A\u7CFB\u7EDF\u7684\u8026\u5408\u5EA6, \u5728\u4FDD\u6301\u63A5\u53E3\u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B, \u6211\u4EEC\u53EF\u4EE5\u66FF\u6362\u4E0D\u540C\u7684\u7EC4\u4EF6\u5FEB\u901F\u5B8C\u6210\u9700\u6C42</li><li>\u8C03\u8BD5\u65B9\u4FBF, \u7531\u4E8E\u6574\u4E2A\u7CFB\u7EDF\u662F\u901A\u8FC7\u7EC4\u4EF6\u7EC4\u5408\u8D77\u6765\u7684\uFF0C\u5728\u51FA\u73B0\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u7528\u6392\u9664\u6CD5\u76F4\u63A5\u79FB\u9664\u7EC4\u4EF6\uFF0C\u6216\u8005\u6839\u636E\u62A5\u9519\u7684\u7EC4\u4EF6\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\uFF0C\u4E4B\u6240\u4EE5\u80FD\u591F\u5FEB\u901F\u5B9A\u4F4D\uFF0C\u662F\u56E0\u4E3A\u6BCF\u4E2A\u7EC4\u4EF6\u4E4B\u95F4\u4F4E\u8026\u5408\uFF0C\u804C\u8D23\u5355\u4E00\uFF0C\u6240\u4EE5\u903B\u8F91\u4F1A\u6BD4\u5206\u6790\u6574\u4E2A\u7CFB\u7EDF\u8981\u7B80\u5355</li><li>\u63D0\u9AD8\u53EF\u7EF4\u62A4\u6027\uFF0C\u7531\u4E8E\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u804C\u8D23\u5355\u4E00\uFF0C\u5E76\u4E14\u7EC4\u4EF6\u5728\u7CFB\u7EDF\u4E2D\u662F\u88AB\u590D\u7528\u7684\uFF0C\u6240\u4EE5\u5BF9\u4EE3\u7801\u8FDB\u884C\u4F18\u5316\u53EF\u83B7\u5F97\u7CFB\u7EDF\u7684\u6574\u4F53\u5347\u7EA7</li></ul><h3 id="vue-\u548C-react-\u5BF9\u6BD4" tabindex="-1">Vue \u548C React \u5BF9\u6BD4 <a class="header-anchor" href="#vue-\u548C-react-\u5BF9\u6BD4" aria-hidden="true">#</a></h3><ol><li><strong>\u76F8\u540C\u70B9</strong></li></ol><ul><li>\u90FD\u6709\u7EC4\u4EF6\u5316\u601D\u60F3</li><li>\u90FD\u652F\u6301\u670D\u52A1\u7AEF\u6E32\u67D3</li><li>\u90FD\u6709 Virtual DOM</li><li>\u6570\u636E\u9A71\u52A8\u89C6\u56FE</li><li>\u90FD\u6709\u81EA\u5DF1\u7684\u6784\u5EFA\u5DE5\u5177</li></ul><ol start="2"><li><strong>\u4E0D\u540C\u70B9</strong></li></ol><ul><li><p>\u6570\u636E\u6D41\u5411\u4E0D\u540C, <strong>react</strong>\u4ECE\u8BDE\u751F\u5C31\u63A8\u5D07\u7684\u662F\u5355\u5411\u6570\u636E\u6D41, \u800C <strong>Vue</strong>\u662F\u53CC\u5411\u6570\u636E\u6D41</p></li><li><p>\u6570\u636E\u53D8\u5316\u7684\u5B9E\u73B0\u539F\u7406\u4E0D\u540C. <strong>react</strong>\u4F7F\u7528\u7684\u662F\u4E0D\u53EF\u53D8\u6570\u636E, \u800C <strong>Vue</strong>\u4F7F\u7528\u7684\u662F\u53EF\u53D8\u7684\u6570\u636E</p></li><li><p>diff \u7B97\u6CD5\u4E0D\u540C, <strong>react</strong>\u4E3B\u8981\u4F7F\u7528 diff \u961F\u5217\u4FDD\u5B58\u9700\u8981\u66F4\u65B0\u54EA\u4E9B DOM, \u5F97\u5230 patch \u6811, \u7136\u540E\u4F7F\u7528 patch \u64CD\u4F5C\u66F4\u65B0\u89C6\u56FE, \u800C <strong>Vue</strong>\u4F7F\u7528\u53CC\u5411\u6307\u9488, \u8FB9\u5BF9\u6BD4, \u8FB9\u66F4\u65B0 DOM</p></li></ul><h3 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h3><p><a href="https://zhuanlan.zhihu.com/p/38296857" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/38296857</a></p>',15),n=[r];function o(s,d,h,u,c,p){return t(),l("div",null,n)}const v=e(a,[["render",o]]);export{g as __pageData,v as default};
