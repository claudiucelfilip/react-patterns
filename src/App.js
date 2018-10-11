import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import TableResourceStore from './components/TableResourceStore';
import TableMobX from './components/TableMobX';
import AdvancedSearch from './components/AdvanedSearch';
import Toggle from './components/Toggle';
import Switch from './components/Switch';
import { addStore } from './components/Store';
import { localStorageConnector } from '@claudiucelfilip/resource-store';

const resOptions = {
    connector: localStorageConnector,
    autoFetch: true,
    autoSave: true,
    initialState: {
        tracks: [],
        columns: [],
        restrictedColumns: [
            'Id',
            'ArtistLink',
            'Link',
            'Mp3Url',
            'ClaimException'
        ]
    }
};
addStore('music-table-1', resOptions);
addStore('music-table-2', resOptions);

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <main className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <Link className="nav-item nav-link" to="/table-resource-store">TableResourceStore</Link>
                                    <Link className="nav-item nav-link" to="/table-mobx">TableMobX</Link>
                                </div>
                            </div>
                        </nav>
                        <br />
                        <AdvancedSearch></AdvancedSearch>
                        <Toggle>
                            {(checked) => <Fragment>
                                {checked && <p>Toggle on</p>}
                                <Switch checked={checked}></Switch>
                                {!checked && <p>Toggle off</p>}
                            </Fragment>}
                        </Toggle>
                        <br />
                        <Route path="/table-resource-store" component={TableResourceStore}></Route>
                        <Route path="/table-mobx" component={TableMobX}></Route>
                        <Redirect to="/table-resource-store" />
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
