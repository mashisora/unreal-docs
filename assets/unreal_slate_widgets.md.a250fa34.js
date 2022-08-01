import{_ as e,c as d,o as a,d as t}from"./app.f78228df.js";const u=JSON.parse('{"title":"Slate \u63A7\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Slate \u63A7\u4EF6","slug":"slate-\u63A7\u4EF6-1"},{"level":2,"title":"\u5B9E\u4F8B\u5316\u63A7\u4EF6","slug":"\u5B9E\u4F8B\u5316\u63A7\u4EF6"},{"level":2,"title":"\u63A7\u4EF6\u7C7B\u578B | Widget Type","slug":"\u63A7\u4EF6\u7C7B\u578B-widget-type"},{"level":2,"title":"\u57FA\u672C\u63A7\u4EF6 | Basic Widgets","slug":"\u57FA\u672C\u63A7\u4EF6-basic-widgets"},{"level":3,"title":"SDockTab","slug":"sdocktab"},{"level":2,"title":"\u5F00\u53D1\u5DE5\u5177","slug":"\u5F00\u53D1\u5DE5\u5177"}],"relativePath":"unreal/slate/widgets.md","lastUpdated":1659348716000}'),o={name:"unreal/slate/widgets.md"},c=t('<h1 id="slate-\u63A7\u4EF6" tabindex="-1">Slate \u63A7\u4EF6 <a class="header-anchor" href="#slate-\u63A7\u4EF6" aria-hidden="true">#</a></h1><h2 id="slate-\u63A7\u4EF6-1" tabindex="-1">Slate \u63A7\u4EF6 <a class="header-anchor" href="#slate-\u63A7\u4EF6-1" aria-hidden="true">#</a></h2><p>Slate UI \u7CFB\u7EDF\u7684\u57FA\u672C\u5355\u4F4D\u662F\u63A7\u4EF6\uFF0C\u6709 GUI \u5F00\u53D1\u7ECF\u9A8C\u7684\u8BFB\u8005\u5E94\u8BE5\u90FD\u80FD\u7406\u89E3\u63A7\u4EF6\u7684\u6982\u5FF5\uFF0C\u5728\u8FD9\u91CC\u4E0D\u8FC7\u591A\u8D58\u8FF0\u3002</p><p>\u5728 Unreal \u4E2D\uFF0C\u6240\u6709 Slate \u63A7\u4EF6\u7684\u57FA\u7C7B\u662F <code>SWidget</code>\uFF0C\u6240\u6709 Slate \u63A7\u4EF6\u7684\u6D3E\u751F\u7C7B\u5747\u6309\u7167 <code>S + \u63A7\u4EF6\u540D</code> \u7684\u89C4\u5219\u547D\u540D\u3002</p><h2 id="\u5B9E\u4F8B\u5316\u63A7\u4EF6" tabindex="-1">\u5B9E\u4F8B\u5316\u63A7\u4EF6 <a class="header-anchor" href="#\u5B9E\u4F8B\u5316\u63A7\u4EF6" aria-hidden="true">#</a></h2><p>Slate \u63D0\u4F9B\u4E86\u4E00\u7EC4\u7528\u4E8E\u5B9E\u4F8B\u5316\u63A7\u4EF6\u7684\u5B8F\uFF0C\u5B83\u4EEC\u5206\u522B\u662F\uFF1A</p><p><code>SNew(WidgetType)</code>\uFF1A\u5B9E\u4F8B\u5316\u63A7\u4EF6\u5E76\u8FD4\u56DE\u5176\u7ED3\u6784</p><p><code>SAssignNew(ExposeAs, WidgetType)</code>\uFF1A\u4E0E <code>SNew()</code> \u884C\u4E3A\u4E00\u81F4\uFF0C\u540C\u65F6\u5C06\u63A7\u4EF6\u6307\u9488\u8D4B\u7ED9 <code>ExposeAs</code></p><p><code>SArgumentNew(InArgs, WidgetType)</code>\uFF1A\u4F7F\u7528 <code>InArgs</code> \u4F5C\u4E3A\u53C2\u6570\u5B9E\u4F8B\u5316\u63A7\u4EF6\u5E76\u8FD4\u56DE\u5176\u7ED3\u6784</p><p>\u8FD9\u4E09\u4E2A\u5B8F\u7684\u5185\u90E8\u5B9E\u73B0\u5747\u4E3A\u4F7F\u7528 Unreal \u667A\u80FD\u5F15\u7528\u6784\u9020 Widget \u3002</p><h2 id="\u63A7\u4EF6\u7C7B\u578B-widget-type" tabindex="-1">\u63A7\u4EF6\u7C7B\u578B | Widget Type <a class="header-anchor" href="#\u63A7\u4EF6\u7C7B\u578B-widget-type" aria-hidden="true">#</a></h2><p><code>SLeafWidget</code> : \u65E0 <code>Slot()</code> \u6210\u5458\uFF0C\u4E0D\u5305\u542B\u5B50 <code>Widget</code></p><p><code>SPanel</code> : \u901A\u8FC7\u5B50\u7C7B\u5B9E\u73B0 <code>Slot()</code> \u7ED3\u6784\uFF0C\u53EF\u5305\u542B\u591A\u4E2A\u5B50 <code>Widget</code></p><p><code>SCompoundWidget</code> : \u6709\u663E\u5F0F\u547D\u540D\u7684 <code>Slot()</code> \u6210\u5458\uFF0C\u53EF\u5305\u542B\u6570\u91CF\u56FA\u5B9A\u7684 <code>Widget</code></p><h2 id="\u57FA\u672C\u63A7\u4EF6-basic-widgets" tabindex="-1">\u57FA\u672C\u63A7\u4EF6 | Basic Widgets <a class="header-anchor" href="#\u57FA\u672C\u63A7\u4EF6-basic-widgets" aria-hidden="true">#</a></h2><h3 id="sdocktab" tabindex="-1"><code>SDockTab</code> <a class="header-anchor" href="#sdocktab" aria-hidden="true">#</a></h3><p>\u5728\u62D3\u5C55\u7A97\u53E3\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u63D0\u5230\u4E86\u4F7F\u7528 <code>FTabManager</code> \u6CE8\u518C\u81EA\u5B9A\u4E49\u7A97\u53E3\uFF0C\u5176\u4E2D <code>FOnSpawnTab</code> \u4EE3\u7406\u9700\u8981\u8FD4\u56DE\u7684\u63A7\u4EF6\u5C31\u662F\u8BE5\u63A7\u4EF6\u3002</p><p><code>SDockTab</code> \u63A7\u4EF6\u63CF\u8FF0\u4E86\u4E00\u4E2A Tab \u7684\u6807\u7B7E\u4FE1\u606F\u548C\u5185\u5BB9\uFF0C\u662F\u6784\u5EFA Unreal \u5185\u72EC\u7ACB\u7A97\u53E3\u5E94\u7528\u7684\u5165\u53E3\u3002</p><h2 id="\u5F00\u53D1\u5DE5\u5177" tabindex="-1">\u5F00\u53D1\u5DE5\u5177 <a class="header-anchor" href="#\u5F00\u53D1\u5DE5\u5177" aria-hidden="true">#</a></h2><p>Unreal Editor \u7684\u5F00\u53D1\u5DE5\u5177\u4E2D\u63D0\u4F9B\u4E86\u4E24\u6B3E\u53EF\u4EE5\u8F85\u52A9\u6211\u4EEC\u5B66\u4E60\u548C\u5F00\u53D1 Unreal \u7F16\u8F91\u5668\u7684\u5DE5\u5177\uFF1A</p><ul><li><p>STARSHIP GALLERY\uFF1A\u8BE5\u5DE5\u5177\u4F4D\u4E8E <code>Tools -&gt; Debug -&gt; Debug Tools -&gt; Test Suite</code><br> \u8BE5\u5DE5\u5177\u5C55\u793A\u4E86\u5927\u90E8\u5206\u5E38\u7528\u7684 Slate \u63A7\u4EF6\u548C\u5BF9\u5E94\u540D\u79F0\u3002</p></li><li><p>Widget Reflector\uFF1A\u8BE5\u5DE5\u5177\u4F4D\u4E8E <code>Tools -&gt; Debug -&gt; Widget Reflector</code><br> \u8BE5\u5DE5\u5177\u53EF\u4EE5\u4ECE\u7F16\u8F91\u5668\u4E2D\u62FE\u53D6 Widget\uFF0C\u5E76\u5C55\u793A\u51FA\u5176\u6811\u5F62\u7ED3\u6784\u3002</p></li></ul><p>\u5BF9\u4E8E\u4E0D\u5ACC\u9EBB\u70E6\u7684\u8BFB\u8005\u6765\u8BF4\uFF0C\u62FF\u7740\u8FD9\u4E24\u4E2A\u5F00\u53D1\u5DE5\u5177\uFF0C\u7ED3\u5408\u9605\u8BFB Unreal Editor \u6E90\u7801\uFF0C\u5DF2\u7ECF\u53EF\u4EE5\u7F16\u5199\u7EDD\u5927\u90E8\u5206 UI \u4E86\u3002</p>',22),i=[c];function l(s,r,p,n,h,g){return a(),d("div",null,i)}var _=e(o,[["render",l]]);export{u as __pageData,_ as default};
