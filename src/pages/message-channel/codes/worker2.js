onmessage = e => {
    const port = e.port[1];
    // 通过 MessagePort 对象监听来自 worker1 的消息
    port.onmessage = e => {
        postMessage(e.data);
    };
};
