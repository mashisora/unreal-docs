import{_ as e,c as l,o as t,d as c}from"./app.0264ab0b.js";const C=JSON.parse('{"title":"Unreal \u667A\u80FD\u6307\u9488\u5E93","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u6A21\u677F\u7C7B | Basic Template Class","slug":"\u57FA\u672C\u6A21\u677F\u7C7B-basic-template-class"},{"level":2,"title":"\u5F15\u7528\u8BA1\u6570\u63A7\u5236\u5668 | Reference Controller","slug":"\u5F15\u7528\u8BA1\u6570\u63A7\u5236\u5668-reference-controller"},{"level":2,"title":"\u5DE5\u5177\u51FD\u6570 | Utility Functions","slug":"\u5DE5\u5177\u51FD\u6570-utility-functions"}],"relativePath":"basic/pointer.md","lastUpdated":1659949051000}'),o={name:"basic/pointer.md"},a=c('<h1 id="unreal-\u667A\u80FD\u6307\u9488\u5E93" tabindex="-1">Unreal \u667A\u80FD\u6307\u9488\u5E93 <a class="header-anchor" href="#unreal-\u667A\u80FD\u6307\u9488\u5E93" aria-hidden="true">#</a></h1><p>Unreal \u6CA1\u6709\u4F7F\u7528 std \u63D0\u4F9B\u7684\u667A\u80FD\u6307\u9488\u5E93\uFF0C\u800C\u662F\u81EA\u5DF1\u5B9E\u73B0\u7684\u4E00\u5957\u667A\u80FD\u6307\u9488\uFF0C\u6E90\u7801\u5165\u53E3\u4F4D\u4E8E\uFF1A</p><ul><li><code>Runtime/Core/Public/Templates/SharedPointer.h</code></li><li><code>Runtime/Core/Public/Templates/SharedPointerInternals.h</code></li></ul><p>\u76F8\u6BD4\u4E8E\u5176\u4ED6\u5B9E\u73B0\u6709\u5982\u4E0B\u4F18\u70B9</p><ul><li>\u8BED\u6CD5\u7B80\u6D01\uFF1A\u4F7F\u7528\u65B9\u6CD5\u4E0E std \u7C7B\u4F3C</li><li>\u53EF\u9009\u7684\u7EBF\u7A0B\u5B89\u5168\uFF1A\u9ED8\u8BA4\u6A21\u5F0F\u4E0B\u4E3A\u975E\u7EBF\u7A0B\u5B89\u5168\uFF0C\u63D0\u4F9B\u66F4\u5FEB\u7684\u901F\u5EA6</li><li>\u5168\u5E73\u53F0\u652F\u6301\u548C\u4E00\u81F4\u6027\uFF1Astd \u4E0D\u80FD\u63D0\u4F9B\u5168\u6E38\u620F\u5E73\u53F0\u7684\u652F\u6301</li><li>\u4F4E\u5185\u5B58\u5360\u7528\uFF1A64-bit \u4E0B\u4EC5\u4E3A 16 \u5B57\u8282\uFF0C\u4E24\u500D\u539F\u751F\u6307\u9488\u5927\u5C0F</li><li>\u65E0\u5916\u90E8\u4F9D\u8D56\uFF1A\u5B8C\u5168\u7531 Unreal \u6838\u5FC3\u5E93\u548C C++ \u539F\u751F\u8BED\u6CD5\u5B9E\u73B0</li></ul><h2 id="\u57FA\u672C\u6A21\u677F\u7C7B-basic-template-class" tabindex="-1">\u57FA\u672C\u6A21\u677F\u7C7B | Basic Template Class <a class="header-anchor" href="#\u57FA\u672C\u6A21\u677F\u7C7B-basic-template-class" aria-hidden="true">#</a></h2><p><code>TSharedRef&lt;&gt;</code></p><ul><li>\u667A\u80FD\u5F15\u7528\uFF0C\u62E5\u6709\u4E0E C++ \u5F15\u7528\u76F8\u4F3C\u7684\u7279\u6027\uFF0C\u4F46\u5B9E\u73B0\u65B9\u5F0F\u4ECD\u4E3A\u5BF9\u539F\u751F\u6307\u9488\u7684\u62D3\u5C55</li><li>\u975E\u7A7A\uFF0C\u6784\u9020\u65F6\u9700\u4F20\u5165\u6709\u6548\u5BF9\u8C61</li><li>\u53C2\u4E0E\u5F15\u7528\u8BA1\u6570\uFF0C\u62E5\u6709\u6240\u6709\u6743</li></ul><p><code>TSharedPtr&lt;&gt;</code></p><ul><li>\u667A\u80FD\u6307\u9488\uFF0C\u62E5\u6709\u4E0E C++ \u6307\u9488\u76F8\u4F3C\u7684\u7279\u6027\uFF0C\u5B9E\u73B0\u65B9\u5F0F\u4E3A\u5BF9\u539F\u751F\u6307\u9488\u7684\u62D3\u5C55\u3002</li><li>\u53C2\u4E0E\u5F15\u7528\u8BA1\u6570\uFF0C\u62E5\u6709\u6240\u6709\u6743</li></ul><p><code>TWeakPtr&lt;&gt;</code></p><ul><li>\u5F31\u6307\u9488\uFF0C\u62E5\u6709\u4E0E C++ \u6307\u9488\u76F8\u4F3C\u7684\u7279\u6027\uFF0C\u5B9E\u73B0\u65B9\u5F0F\u4E3A\u5BF9\u539F\u751F\u6307\u9488\u7684\u62D3\u5C55\u3002</li><li>\u4E0D\u53C2\u4E0E\u5F15\u7528\u8BA1\u6570\uFF0C\u4E0D\u62E5\u6709\u6240\u6709\u6743</li></ul><p>\u4ECE\u6027\u80FD\u548C\u5B89\u5168\u6027\u7684\u89D2\u5EA6\u8003\u8651\uFF0C\u5728\u53EF\u4F7F\u7528\u667A\u80FD\u5F15\u7528\u7684\u573A\u666F\u4E0B\uFF0C\u5E94\u4F18\u5148\u9009\u62E9\u4F7F\u7528\u667A\u80FD\u5F15\u7528\u3002</p><h2 id="\u5F15\u7528\u8BA1\u6570\u63A7\u5236\u5668-reference-controller" tabindex="-1">\u5F15\u7528\u8BA1\u6570\u63A7\u5236\u5668 | Reference Controller <a class="header-anchor" href="#\u5F15\u7528\u8BA1\u6570\u63A7\u5236\u5668-reference-controller" aria-hidden="true">#</a></h2><p>Unreal \u667A\u80FD\u6307\u9488\u7684\u5F15\u7528\u8BA1\u6570\u8868\u7531 <code>ReferenceController</code> \u7EF4\u62A4\uFF0C\u5927\u5C0F\u4EC5 16 \u5B57\u8282\u3002\u6BCF\u4E2A\u63A7\u5236\u5668\u62E5\u6709 <code>SharedReferenceCount</code> \u548C <code>WeakReferenceCount</code> \u4E24\u4E2A\u8BA1\u6570\u5668\uFF0C\u5206\u522B\u8BB0\u5F55\u667A\u80FD\u6307\u9488\uFF08\u6216\u5F15\u7528\uFF09\u4E0E\u5F31\u6307\u9488\u7684\u6570\u91CF\u3002</p><p>\u4E00\u4E2A\u667A\u80FD\u6307\u9488\u63A7\u5236\u5668\u7684\u751F\u547D\u5468\u671F\u5982\u4E0B\uFF1A</p><ul><li>\u5B9E\u4F8B\u5316\uFF1A\u5728 <code>ReferenceController</code> \u5BF9\u8C61\u88AB\u6784\u9020\u65F6\uFF0C\u4E24\u4E2A\u8BA1\u6570\u5668\u7684\u503C\u5747\u521D\u59CB\u5316\u4E3A <code>1</code></li><li>\u589E\u52A0\u8BA1\u6570\uFF1A <ul><li>\u5728\u667A\u80FD\u6307\u9488\uFF08\u6216\u5F15\u7528\uFF09\u7684\u62F7\u8D1D\u6784\u9020\u51FD\u6570\u4E2D\u589E\u52A0\u8BA1\u6570\u5668 <code>SharedReferenceCount</code> \u8BA1\u6570</li><li>\u5728\u5F31\u6307\u9488\u7684\u62F7\u8D1D\u6784\u9020\u51FD\u6570\u4E2D\u589E\u52A0\u8BA1\u6570\u5668 <code>WeakReferenceCount</code> \u8BA1\u6570</li></ul></li><li>\u51CF\u5C11\u8BA1\u6570\uFF1A <ul><li>\u5728\u667A\u80FD\u6307\u9488\uFF08\u6216\u5F15\u7528\uFF09\u7684\u6790\u6784\u51FD\u6570\u4E2D\u51CF\u5C11\u8BA1\u6570\u5668 <code>SharedReferenceCount</code> \u8BA1\u6570</li><li>\u5728\u5F31\u6307\u9488\u7684\u6790\u6784\u51FD\u6570\u4E2D\u51CF\u5C11\u8BA1\u6570\u5668 <code>WeakReferenceCount</code> \u8BA1\u6570</li></ul></li><li>\u91CA\u653E\uFF1A\u5F53\u8BA1\u6570\u5668 <code>SharedReferenceCount</code> \u51CF\u5C11\u81F3 <code>0</code> \u65F6\uFF0C\u610F\u5473\u7740\u5F53\u524D\u5F15\u7528\u5BF9\u8C61\u5DF2\u7ECF\u6CA1\u6709\u6709\u6548\u7684\u667A\u80FD\u6307\u9488\uFF08\u6216\u5F15\u7528\uFF09\u5B58\u5728\u3002\u63A7\u5236\u5668\u5C06\u8C03\u7528 <code>DestroyObject()</code> \u65B9\u6CD5\u91CA\u653E\u5F15\u7528\u5BF9\u8C61\uFF0C\u540C\u65F6\u91CA\u653E\u6307\u5411\u8BE5\u5BF9\u8C61\u7684\u6240\u6709\u5F31\u6307\u9488\u4E0E\u63A7\u5236\u5668\u672C\u8EAB\u3002<code>DestroyObject()</code> \u65B9\u6CD5\u9ED8\u8BA4\u4F7F\u7528 <code>delete</code> \u64CD\u4F5C\u7B26\u91CA\u653E\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u5728\u667A\u80FD\u6307\u9488\u6784\u9020\u65F6\u4F20\u5165\u81EA\u5B9A\u4E49\u7684 Deleter \u3002</li></ul><h2 id="\u5DE5\u5177\u51FD\u6570-utility-functions" tabindex="-1">\u5DE5\u5177\u51FD\u6570 | Utility Functions <a class="header-anchor" href="#\u5DE5\u5177\u51FD\u6570-utility-functions" aria-hidden="true">#</a></h2><p><code>MakeShared&lt;&gt;()</code> \u6CE8\u518C\u667A\u80FD\u6307\u9488\uFF0C\u5C06\u63A7\u5236\u5668\u548C\u5F15\u7528\u5BF9\u8C61\u521D\u59CB\u5316\u5728\u8FDE\u7EED\u7684\u5185\u5B58\u4E0A</p><p><code>MakeSharable()</code> \u8F6C\u6362\u539F\u751F\u6307\u9488\u4E3A\u667A\u80FD\u6307\u9488</p><p><code>TSharedPtr::Reset()</code> \u5F3A\u5236\u91CA\u653E\u5F15\u7528\u5BF9\u8C61\u548C\u63A7\u5236\u5668</p><p><code>StaticCastSharedRef()</code> <code>ConstCastSharedRef()</code> \u667A\u80FD\u5F15\u7528\u7C7B\u578B\u8F6C\u6362</p><p><code>StaticCastSharedPtr()</code> <code>ConstCastSharedPtr()</code> \u667A\u80FD\u6307\u9488\u7C7B\u578B\u8F6C\u6362</p>',23),i=[a];function r(d,n,s,u,p,h){return t(),l("div",null,i)}var _=e(o,[["render",r]]);export{C as __pageData,_ as default};
