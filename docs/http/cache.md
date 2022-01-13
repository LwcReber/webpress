# 缓存

浏览器缓存 localStorage、sessionStorage、cookie

### 强缓存

1. Expires 响应过期时间 如果在响应头Cache-control设置了 "max-age" 或者 "s-max-age" 指令，那么 `Expires` 头会被忽略。

2. Cache-Control

   1. no-cache 与服务器进行对比验证是否需要缓存
   2. no-store  不进行任何的缓存，代理服务器也不会缓存
   3. public缓存到终端和代理服务器
   4. private只缓存到终端浏览器

   到期 

   max-age 设置缓存的最大周期，单位秒

   s-maxage 覆盖max-age或者Expires，适用在共享缓存



### 协商缓存

1. last-modified 精确到秒，last-modified资源修改的日期时间

 if-modified-since 上次返回的last-modified进行对比，有更新则使用新资源，只可以用在get或head请求中

2. Etag if-None-Match 与时间无关

   etag令牌，资源变化，etag变化

   if-None-Match 根据上次返回的etag值，确认资源etag是否有变化，有变化使用新资源

   etag缺点 计算有开销，带来性能损失，如果是多实例的，可能会命中另一个实例的资源，导致使用新资源

