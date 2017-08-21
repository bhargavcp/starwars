import React, { Component } from "react";
import {connect} from 'react-redux';
import {getCharacters} from '../actions/getCharacters';
import PeopleList from '../containers/PeopleList'

class Home extends Component {
    componentWillMount(){
      this.props.fetchPeople();
    }

    render() {
        return (
            <div className="page">
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