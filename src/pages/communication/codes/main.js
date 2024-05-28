// 创建一个新的消息通道
const messageChannel = new MessageChannel();

// 将两个 port 对象分别传给 worker1, 和 worker2
const worker1 = new Worker("worker1.js");
const worker2 = new Worker("worker2.js");
worker1.postMessage("port1", [messageChannel.port1]);
worker2.postMessage("port2", [messageChannel.port2]);
worker2.onmessage = function(e) {
    console.log(e.data);
}
