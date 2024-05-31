import { lazy } from 'solid-js';
import { Router, Route } from '@solidjs/router';

const Home = lazy(() => import('./pages/home'));
const Js1kMagicalLightTunnel = lazy(() => import('./pages/js1k-magical-light-tunnel'));
const MessageChannelPage = lazy(() => import('./pages/message-channel'));
const BroadcastChannelPage = lazy(() => import('./pages/boradcast-channel'));
const PostMessagePage = lazy(() => import('./pages/post-message'));
const StorageEventPage = lazy(() => import('./pages/storage-event'));

export function App() {
    return (
        <>
            <Router>
                <Route path="/js1k-magical-light-tunnel" component={Js1kMagicalLightTunnel}></Route>
                <Route path="/message-channel" component={MessageChannelPage}></Route>
                <Route path="/broadcast-channel" component={BroadcastChannelPage}></Route>
                <Route path="/post-message" component={PostMessagePage}></Route>
                <Route path="/storage-event" component={StorageEventPage}></Route>
                <Route path="/" component={Home}></Route>
            </Router>
        </>
    );
}
