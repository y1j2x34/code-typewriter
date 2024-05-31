import { Frame } from '@/components/frame/Frame';
import { HighlightCode } from '@/components/highlight-code/HighlightCode';

export default function StorageEventPage() {
    return (
        <>
            <div class="code-bg">
                <h2 class="code-head">
                    StorageEvent是在不同标签页之间同步数据的一种方式,
                    通过监视localStorage或sessionStorage的变化来实现通信。
                </h2>
                <Frame title="page1.js" theme="dark" class="code-frame">
                    <HighlightCode
                        class="py-[21px] w-full"
                        code={`// 在一个页面中设置localStorage
                        localStorage.setItem('sharedData', 'Hello from another tab');
                        `.replaceAll('  ', '')}
                        language="javascript"
                        theme="base16/dracula"
                        typewriter={false}
                    ></HighlightCode>
                </Frame>

                <Frame title="page2.js" theme="dark" class="code-frame">
                    <HighlightCode
                        class="py-[21px] w-full"
                        code={`// 在另一个页面中监听storage事件
                        window.addEventListener('storage', (event) => {
                          if (event.key === 'sharedData') {
                            console.log('Received data from another tab:', event.newValue);
                          }
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
