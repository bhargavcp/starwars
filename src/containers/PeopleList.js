import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PersonPage from './PersonPage'
import { BrowserRouter } from 'react-router-dom';
import {getIndividualCharacter} from '../actions/getIndividualCharacter';

class PeopleList extends Component {

    getPeopleDetails = () => {
            return(
                this.props.people.map(person => {
                    return (
                            <tr key={person.name}>
                                <td>
                                    <Link to="/personpage" onClick={() => {this.props.getIndividualCharacter(person.url)}}>
                                        {person.name}
                                    </Link>
                                </td>
                                <td>{person.birth_year}</td>
                            </tr>
                    );
                })
            );
    };


    render(){
        if(this.props.people.length < 1){
            return (<div>Please click on the button to view the list.</div>);
        }
        return(
        <BrowserRouter>
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Birth Year</th>
                    </tr>
                    {this.getPeopleDetails()}
                    </tbody>
                </table>
                <Route exact path="/personpage" component={PersonPage}/>
            </div>
        </BrowserRouter>

    );

    }
}


function mapStateToProps(state){
    return {people: state.people};
}

function mapDispatchToProps(dispatch){
    return {
        getIndividualCharacter: (url) => dispatch(getIndividualCharacter(url))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);