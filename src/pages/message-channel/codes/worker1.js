onmessage = e => {
    const port = e.ports[0];
    // 通过 MessagePort 对象向 worker2 发送消息
    port.postMessage('This is from worker1');
};
