import{_ as e,c as r,o as a,a as t}from"./app.61589ad5.js";const E=JSON.parse('{"title":"\u62D3\u5C55 Editor","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u672C\u7AE0\u5185\u5BB9","slug":"\u672C\u7AE0\u5185\u5BB9"},{"level":2,"title":"\u5F00\u53D1\u8005\u5DE5\u5177","slug":"\u5F00\u53D1\u8005\u5DE5\u5177"}],"relativePath":"extend/intro.md","lastUpdated":1660026515000}'),i={name:"extend/intro.md"},n=t('<h1 id="\u62D3\u5C55-editor" tabindex="-1">\u62D3\u5C55 Editor <a class="header-anchor" href="#\u62D3\u5C55-editor" aria-hidden="true">#</a></h1><p>Unreal \u7684\u6E90\u4EE3\u7801\u662F\u5B8C\u5168\u5F00\u653E\u7684\uFF0C\u7406\u8BBA\u4E0A\u6211\u4EEC\u53EF\u4EE5\u5BF9 Unreal Editor \u505A\u51FA\u4EFB\u610F\u66F4\u6539\u3002\u4F46\u4F5C\u4E3A\u62E5\u6709 20 \u4F59\u5E74\u5386\u53F2\u7684\u5F53\u4ECA\u6700\u5F3A\u5927\u7684\u5546\u4E1A\u6E38\u620F\u5F15\u64CE\uFF0CUnreal \u7684\u5E95\u5C42\u4EE3\u7801\u590D\u6742\u5EA6\u6781\u9AD8\uFF0C\u6838\u5FC3\u6A21\u5757\u95F4\u5B58\u5728\u5927\u91CF\u8026\u5408\uFF0C\u5E76\u4E14\u4ECD\u5728\u98DE\u901F\u53D1\u5C55\u3002\u4ECE\u5F00\u53D1\u96BE\u5EA6\u548C\u9879\u76EE\u5DE5\u7A0B\u6027\u7684\u89D2\u5EA6\u8003\u8651\uFF0C\u76F4\u63A5\u4FEE\u6539 Unreal Editor \u7684\u6E90\u4EE3\u7801\u662F\u6781\u4E0D\u660E\u667A\u7684\u3002</p><p>\u4F46\u597D\u5728 Unreal \u5F00\u53D1\u56E2\u961F\u4E00\u76F4\u5728\u81F4\u529B\u4E8E\u89E3\u51B3\u5386\u53F2\u9057\u7559\u95EE\u9898\u548C\u8FC7\u5EA6\u8026\u5408\u95EE\u9898\uFF0C\u4E0D\u65AD\u4F18\u5316 API \u7684\u6613\u7528\u6027\u3002\u622A\u6B62\u5230 Unreal 5.0 \u6B63\u5F0F\u7248\uFF0CUnreal Editor \u7684\u5E94\u7528\u5C42\u90E8\u5206\u51E0\u4E4E\u90FD\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u8FDB\u884C\u5168\u5C40\u7BA1\u7406\uFF0C\u5E76\u4E14\u9884\u7559\u4E86\u5927\u91CF\u62D3\u5C55\u4F4D\u548C\u94A9\u5B50\uFF0C\u4F7F\u5F97\u6211\u4EEC\u53EF\u4EE5\u5728\u4E0D\u7834\u574F Unreal \u539F\u6709\u4EE3\u7801\u7684\u524D\u63D0\u4E0B\u65B9\u4FBF\u5730\u5BF9 Unreal Editor \u8FDB\u884C\u62D3\u5C55\u3002</p><h2 id="\u672C\u7AE0\u5185\u5BB9" tabindex="-1">\u672C\u7AE0\u5185\u5BB9 <a class="header-anchor" href="#\u672C\u7AE0\u5185\u5BB9" aria-hidden="true">#</a></h2><p>\u672C\u7AE0\u5C06\u4ECB\u7ECD\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><ul><li>Unreal Editor \u4E2D\u7684 Commands \u7CFB\u7EDF\u3002</li><li>\u5728 Unreal Editor \u4E2D\u6DFB\u52A0\u81EA\u5B9A\u4E49\u83DC\u5355\u3002</li><li>\u5728 Unreal Editor \u4E2D\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7A97\u53E3\u3002</li></ul><h2 id="\u5F00\u53D1\u8005\u5DE5\u5177" tabindex="-1">\u5F00\u53D1\u8005\u5DE5\u5177 <a class="header-anchor" href="#\u5F00\u53D1\u8005\u5DE5\u5177" aria-hidden="true">#</a></h2><p>Editor Preference \u4E2D\u63D0\u4F9B\u4E86\u5F00\u53D1\u8005\u9009\u9879 <code>Display UI Extension Points</code>\uFF0C\u7528\u4E8E\u67E5\u770B Unreal Editor \u4E2D\u7684\u53EF\u62D3\u5C55\u70B9\u4F4D\u3002\u5EFA\u8BAE\u8BFB\u8005\u5728\u5F00\u59CB\u672C\u7AE0\u524D\u5C1D\u8BD5\u6B64\u5F00\u53D1\u8005\u9009\u9879\uFF0C\u4EE5\u4FBF\u5BF9 Unreal Editor \u7684\u53EF\u62D3\u5C55\u6027\u6709\u521D\u6B65\u8BA4\u8BC6\u3002</p>',8),d=[n];function o(l,s,c,_,h,p){return a(),r("div",null,d)}var u=e(i,[["render",o]]);export{E as __pageData,u as default};