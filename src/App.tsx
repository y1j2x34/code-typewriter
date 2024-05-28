import { lazy } from 'solid-js';
import { Router, Route } from '@solidjs/router';

const Home = lazy(() => import('./pages/home'));
const Js1kMagicalLightTunnel = lazy(() => import('./pages/js1k-magical-light-tunnel'));
const Communication = lazy(() => import('./pages/communication'));

export function App() {
    return (
        <>
            <Router>
                <Route path="/js1k-magical-light-tunnel" component={Js1kMagicalLightTunnel}></Route>
                <Route path="/communication" component={Communication}></Route>
                <Route path="/" component={Home}></Route>
            </Router>
        </>
    );
}
