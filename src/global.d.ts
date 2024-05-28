declare module '*.txt?raw' {
    declare const code: string;
    export default code;
}
declare module '*.js?raw' {
    declare const code: string;
    export default code;
}
type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never;
