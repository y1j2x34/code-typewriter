import { Frame } from '@/components/frame/Frame';
import { HighlightCode } from '@/components/highlight-code/HighlightCode';

export default function PostMessagePage() {
    return (
        <>
            <div class="code-bg">
                <h2 class="code-head">window.postMessage 方法用于在不同窗口、iframe 或标签页之间安全地实现跨源通信</h2>
                <Frame title="page1.js" theme="dark" class="code-frame">
                    <HighlightCode
                        class="py-[21px] w-full"
                        code={`// 在发送消息的上下文中：
                        window.postMessage('Hello from another page', '*');
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
                        window.addEventListener('message', (event) => {
                          console.log('Received message:', event.data);
                        });
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
