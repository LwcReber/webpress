# 各版本对比

### http 1.0

Header if-modified-since expires

 if-modified-since会与当前服务器上相关资源最后一次修改时间进行对比

不支持断点续传



### http1.1

etag if-None-Match if-unmodfied-since if-match

请求头加入range允许只请求某个部分

新增24个错误码

支持长连接，keep-alive



### http 2.0

新的二进制，方便健壮

多路复用

header压缩，减少了传输的大小，同时使用缓存，避免了header的重复传输

新增服务端推送，serverpush

### http3.0

QUIC建立在UPD的基础上，同时实现了握手的过程

QUIC向前纠错特性，减少了丢包数据重传的情况



### https

需要ssl证书

端口 443

有效防止运营商的劫持

#### 建立安全传输的过程

1. 建立443的TCP连接
2. SSL安全参数握手
3. 在SSL上发送HTTP请求，在TCP上发送已加密的请求
4. 在SSL上发送HTTP响应，在TCP上发送已加密的响应
5. SSL关闭通知
6. TCP连接关闭