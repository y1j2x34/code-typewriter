import { ParentProps } from 'solid-js';

export type FrameProps = ParentProps<{
    title: string;
    theme: 'light' | 'dark';
    class?: string;
}>;

export function Frame(props: FrameProps) {
    return (
        <div class={`flex flex-col overflow-hidden rounded-lg ${props.theme} shadow-lg ${props.class || ''}`}>
            <div class="flex flex-row items-center justify-start relative h-[45px] bg-frame-head gap-5 px-4">
                <svg viewBox="0 0 420 100" class="inline-block align-middle w-[55px] h-auto">
                    <circle fill="#ff5f57" cx="50" cy="50" r="50"></circle>
                    <circle fill="#febc2e" cx="210" cy="50" r="50"></circle>
                    <circle fill="#28c840" cx="370" cy="50" r="50"></circle>
                </svg>
                <div class="group flex items-center relative rounded-tl-lg rounded-tr-lg border-b-0 h-[40px] mt-[5px] bg-frame-tab pl-[17px] pr-[25px] z-10 text-frame-tab-title">
                    <div class="absolute -left-3 bottom-0 w-3 h-3 bg-frame-tab"></div>
                    <div class="absolute -left-3 bottom-0 w-3 h-3 bg-frame-head rounded-br-full"></div>
                    <div class="absolute -right-3 bottom-0 w-3 h-3 bg-frame-tab"></div>
                    <div class="absolute -right-3 bottom-0 w-3 h-3 bg-frame-head rounded-bl-full"></div>
                    <div class="cursor-text min-h-[19px] overflow-hidden text-ellipsis select-text text-xl">
                        {props.title}
                    </div>
                    <button
                        class="hidden group-hover:flex appearance-none select-none whitespace-nowrap text-center w-5 h-5 absolute top-3.2 right-1 items-center content-center"
                        title="delete"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            class="css-0"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex flex-grow-1 overflow-hidden text-left">{props.children}</div>
        </div>
    );
}
