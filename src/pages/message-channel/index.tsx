import { Frame } from '@/components/frame/Frame';
import { HighlightCode } from '@/components/highlight-code/HighlightCode';
import mainCode from './codes/main.js?raw';
import worker1Code from './codes/worker1.js?raw';
import worker2Code from './codes/worker2.js?raw';

export default function MessageChannelPage() {
    let element: HTMLDivElement | undefined;
    return (
        <>
            <div class="code-bg" ref={element}>
                <h2 class="code-head">
                    MessageChannel API 允许我们创建一个新的消息通道， 并通过它的两个 MessagePort 属性收发数据。
                </h2>
                <Frame title="main.js" theme="dark" class="code-frame">
                    <HighlightCode
                        class="py-[21px] w-full"
                        code={mainCode}
                        language="javascript"
                        theme="base16/dracula"
                        typewriter={false}
                    ></HighlightCode>
                </Frame>

                <Frame title="worker1.js" theme="dark" class="code-frame">
                    <HighlightCode
                        class="py-2 w-full"
                        code={worker1Code}
                        language="javascript"
                        theme="base16/dracula"
                        typewriter={false}
                    ></HighlightCode>
                </Frame>

                <Frame title="worker2.js" theme="dark" class="code-frame">
                    <HighlightCode
                        class="py-2 w-full"
                        code={worker2Code}
                        language="javascript"
                        theme="base16/dracula"
                        typewriter={false}
                    ></HighlightCode>
                </Frame>
            </div>
        </>
    );
}
