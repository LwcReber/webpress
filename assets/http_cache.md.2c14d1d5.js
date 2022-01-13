import{_ as e,c as a,o as t,a as i}from"./app.89496c5a.js";const g='{"title":"\u7F13\u5B58","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5F3A\u7F13\u5B58","slug":"\u5F3A\u7F13\u5B58"},{"level":3,"title":"\u534F\u5546\u7F13\u5B58","slug":"\u534F\u5546\u7F13\u5B58"}],"relativePath":"http/cache.md","lastUpdated":1642064673098}',o={},l=i('<h1 id="\u7F13\u5B58" tabindex="-1">\u7F13\u5B58 <a class="header-anchor" href="#\u7F13\u5B58" aria-hidden="true">#</a></h1><p>\u6D4F\u89C8\u5668\u7F13\u5B58 localStorage\u3001sessionStorage\u3001cookie</p><h3 id="\u5F3A\u7F13\u5B58" tabindex="-1">\u5F3A\u7F13\u5B58 <a class="header-anchor" href="#\u5F3A\u7F13\u5B58" aria-hidden="true">#</a></h3><ol><li><p>Expires \u54CD\u5E94\u8FC7\u671F\u65F6\u95F4 \u5982\u679C\u5728\u54CD\u5E94\u5934Cache-control\u8BBE\u7F6E\u4E86 &quot;max-age&quot; \u6216\u8005 &quot;s-max-age&quot; \u6307\u4EE4\uFF0C\u90A3\u4E48 <code>Expires</code> \u5934\u4F1A\u88AB\u5FFD\u7565\u3002</p></li><li><p>Cache-Control</p><ol><li>no-cache \u4E0E\u670D\u52A1\u5668\u8FDB\u884C\u5BF9\u6BD4\u9A8C\u8BC1\u662F\u5426\u9700\u8981\u7F13\u5B58</li><li>no-store \u4E0D\u8FDB\u884C\u4EFB\u4F55\u7684\u7F13\u5B58\uFF0C\u4EE3\u7406\u670D\u52A1\u5668\u4E5F\u4E0D\u4F1A\u7F13\u5B58</li><li>public\u7F13\u5B58\u5230\u7EC8\u7AEF\u548C\u4EE3\u7406\u670D\u52A1\u5668</li><li>private\u53EA\u7F13\u5B58\u5230\u7EC8\u7AEF\u6D4F\u89C8\u5668</li></ol><p>\u5230\u671F</p><p>max-age \u8BBE\u7F6E\u7F13\u5B58\u7684\u6700\u5927\u5468\u671F\uFF0C\u5355\u4F4D\u79D2</p><p>s-maxage \u8986\u76D6max-age\u6216\u8005Expires\uFF0C\u9002\u7528\u5728\u5171\u4EAB\u7F13\u5B58</p></li></ol><h3 id="\u534F\u5546\u7F13\u5B58" tabindex="-1">\u534F\u5546\u7F13\u5B58 <a class="header-anchor" href="#\u534F\u5546\u7F13\u5B58" aria-hidden="true">#</a></h3><ol><li>last-modified \u7CBE\u786E\u5230\u79D2\uFF0Clast-modified\u8D44\u6E90\u4FEE\u6539\u7684\u65E5\u671F\u65F6\u95F4</li></ol><p>if-modified-since \u4E0A\u6B21\u8FD4\u56DE\u7684last-modified\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u6709\u66F4\u65B0\u5219\u4F7F\u7528\u65B0\u8D44\u6E90\uFF0C\u53EA\u53EF\u4EE5\u7528\u5728get\u6216head\u8BF7\u6C42\u4E2D</p><ol start="2"><li><p>Etag if-None-Match \u4E0E\u65F6\u95F4\u65E0\u5173</p><p>etag\u4EE4\u724C\uFF0C\u8D44\u6E90\u53D8\u5316\uFF0Cetag\u53D8\u5316</p><p>if-None-Match \u6839\u636E\u4E0A\u6B21\u8FD4\u56DE\u7684etag\u503C\uFF0C\u786E\u8BA4\u8D44\u6E90etag\u662F\u5426\u6709\u53D8\u5316\uFF0C\u6709\u53D8\u5316\u4F7F\u7528\u65B0\u8D44\u6E90</p><p>etag\u7F3A\u70B9 \u8BA1\u7B97\u6709\u5F00\u9500\uFF0C\u5E26\u6765\u6027\u80FD\u635F\u5931\uFF0C\u5982\u679C\u662F\u591A\u5B9E\u4F8B\u7684\uFF0C\u53EF\u80FD\u4F1A\u547D\u4E2D\u53E6\u4E00\u4E2A\u5B9E\u4F8B\u7684\u8D44\u6E90\uFF0C\u5BFC\u81F4\u4F7F\u7528\u65B0\u8D44\u6E90</p></li></ol>',8),r=[l];function s(c,p,d,n,h,_){return t(),a("div",null,r)}var m=e(o,[["render",s]]);export{g as __pageData,m as default};