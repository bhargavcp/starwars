import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Subpage from "./pages/Subpage";
import { BrowserRouter } from "react-router-dom";

class App extends Component {

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <div className="TopBar">
                            <Link to="/">Home</Link>
                            <Link to="/subpage">Subpage</Link>
                        </div>
                        <br/> <br/> <br/>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/subpage" component={Subpage} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;