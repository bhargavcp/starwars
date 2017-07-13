import React, { Component } from "react";
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {getCharacters} from './actions/getCharacters';

class Home extends Component {

    // onFormSubmit = (event) => {
    //     event.preventDefault();
    //
    // };

    renderPeople = (args) => {
        if (!args.people){
            return (<h2>Click on sibmit to view..</h2>);
        }else {
            return (args.people.map((peopleObj) => {
                    return (
                        <ul>
                            <li>{peopleObj.name}</li>
                            <li>{peopleObj.birth_year}</li>
                            <li>Age: Well who knows!?</li>
                        </ul>
                    );
                })
            );
        }
    };

    render() {
        return (
            <div className="page">
                {/*<form onSubmit={this.onFormSubmit}>*/}
                    {/*<span className="input-group-btn">*/}
                        {/*<button type="submit" className="btn btn-secondary">Submit</button>*/}
                    {/*</span>*/}
                {/*</form>*/}

                <p>Hello from the home page!</p>
                <div>{this.props.fetchPeople()}</div>
            </div>
        )
    }
}

function mapStateToProps({people}){
    console.log("Value of people: ", people);
    return {people};
}

function mapDispatchToProps(dispatch){
    // return {bindActionCreators({getPeople: getCharacters}, dispatch);
    return {
        fetchPeople: () => dispatch(getCharacters())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);