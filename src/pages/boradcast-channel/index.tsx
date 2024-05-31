import { Frame } from '@/components/frame/Frame';
import { HighlightCode } from '@/components/highlight-code/HighlightCode';

export default function BroadcastChannel() {
    return (
        <>
            <div class="code-bg">
                <h2 class="code-head">
                    BroadcastChannel 创建一个所有同源页面/上下文(标签页、iframe, worker等)都可以共享的广播频道
                </h2>
                <Frame title="page1.js" theme="dark" class="code-frame">
                    <HighlightCode
                        class="py-[21px] w-full"
                        code={`// 在发送消息的上下文中
                        const broadcastChannel = new BroadcastChannel('my_channel');
                        broadcastChannel.postMessage('Hello from BroadcastChannel');
                        `.replaceAll('  ', '')}
                        language="javascript"
                        theme="base16/dracula"
                        typewriter={false}
                    ></HighlightCode>
                </Frame>

                <Frame title="page2.js" theme="dark" class="code-frame">
                    <HighlightCode
                        class="py-[21px] w-full"
                        code={`// 在接收消息的上下文中
                        const broadcastChannel = new BroadcastChannel('my_channel');
                        broadcastChannel.onmessage = (event) => {
                           console.log('Received message:', event.data);
                        };
                        `.replace(/        /g, '')}
                        language="javascript"
                        theme="base16/dracula"
                        typewriter={false}
                    ></HighlightCode>
                </Frame>
            </div>
        </>
    );
}
