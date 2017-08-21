import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Home} />

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;