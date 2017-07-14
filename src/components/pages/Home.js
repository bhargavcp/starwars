import React, { Component } from "react";
import {connect} from 'react-redux';
import {getCharacters} from '../../actions/getCharacters';
import PeopleList from '../../containers/PeopleList'

class Home extends Component {


    onSubmitHandler = () => {
        this.props.fetchPeople();
    };

    render() {
        return (
            <div className="page">
                <button className="btn btn-secondary" onClick={this.onSubmitHandler}>Submit</button>
                <br/>
                <br/>
                <PeopleList/>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return {
        fetchPeople: () => dispatch(getCharacters())
    };
}

export default connect(null, mapDispatchToProps)(Home);