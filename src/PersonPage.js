import React, {Component} from 'react';
import {connect} from 'react-redux';

class PersonPage extends Component {

    render(){
        return(
            <table>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Hair Color</th>
                    <th>Eye Color</th>
                    <th>Birth Year</th>
                    <th>Gender</th>
                </tr>
                <tr>
                    <td>
                        {this.props.person.name}
                    </td>
                    <td>
                        {this.props.person.height}
                    </td>
                    <td>
                        {this.props.person.mass}
                    </td>
                    <td>
                        {this.props.person.hair_color}
                    </td>
                    <td>
                        {this.props.person.eye_color}
                    </td>
                    <td>
                        {this.props.person.birth_year}
                    </td>
                    <td>
                        {this.props.person.gender}
                    </td>
                </tr>
            </table>
        );

    }
}


function mapStateToProps(state){
    return {person: state.individualPerson};
}

export default connect(mapStateToProps)(PersonPage);
