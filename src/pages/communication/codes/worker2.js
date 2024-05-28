onmessage = e => {
    const port = e.port[1];
    port.onmessage = e => {
        postMessage(e.data);
    };
};
