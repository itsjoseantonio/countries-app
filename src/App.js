import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Views //
import Home from './views/Home';
import Single from './views/Single';

// Components //
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Switch>
                    <Route path="/:name">
                        <Single />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
