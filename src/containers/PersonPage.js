import React, {Component} from 'react';
import {connect} from 'react-redux';

class PersonPage extends Component {

    render(){
        return(
            <div>
                <table>
                    <tr key={"PersonTableHeader"}>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Hair Color</th>
                        <th>Eye Color</th>
                        <th>Birth Year</th>
                        <th>Gender</th>
                    </tr>
                    <tr key={this.props.person.name}>
                        <td>{this.props.person.name}</td>
                        <td>{this.props.person.height}</td>
                        <td>{this.props.person.mass}</td>
                        <td>{this.props.person.hair_color}</td>
                        <td>{this.props.person.eye_color}</td>
                        <td>{this.props.person.birth_year}</td>
                        <td>{this.props.person.gender}</td>
                    </tr>
                </table>
                {this.renderStarshipsIfAny(this.props.starShips)}
            </div>
        );
    }

    renderStarshipsIfAny = (starShips) => {
      if(!starShips){
          return (<h2>No starships associated</h2>);
      }
      else{
          let jsxArray = [];
          for(let i = 0; i < starShips.length; i++){
            if (i < 1){
                jsxArray.push(
                    <table key={"StarshipTable"}>
                        {this.renderTableHeader()}
                        {this.renderStarshipDetails(starShips[i])}
                    </table>
                )
            }
            else {
                jsxArray.push(
                    this.renderStarshipDetails(starShips[i])
                );
            }
          }
          return jsxArray;
      }
    };

    renderStarshipDetails = (starShip) => {
        return(
            <tr key={starShip.name}>
                <td>{starShip.name}</td>
                <td>{starShip.model}</td>
                <td>{starShip.length}</td>
                <td>{starShip.cost_in_credits}</td>
                <td>{starShip.crew}</td>
                <td>{starShip.hyperdrive_rating}</td>
            </tr>
        )
    };

    renderTableHeader = () => {
        return(
            <tr key={"Header"}>
                <th>Name</th>
                <th>Mode</th>
                <th>Length</th>
                <th>Cost in Credits</th>
                <th>Crew</th>
                <th>Hyperdrive Rating</th>
            </tr>
        );
    };
}




function mapStateToProps(state){
    return {person: state.individualPerson, starShips: state.starShips};
}

export default connect(mapStateToProps)(PersonPage);
