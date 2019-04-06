import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';

const Input = styled.div`
   form {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
     buttom{
        width: 15rem;
     }
    label{
        display: flex;
        flex-direction: column;  
    }
   }
`;

class SmurfForm extends Component {
 
  state = {
      name: '',
      age: '',
      height: '',
      id: ''
    };
  

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
        axios
            .post('http://localhost:3333/smurfs', {
                name: this.state.name,
                age: this.state.age, 
                height: this.state.height,
                id: Date.now(),
            })
            .then(res => {
                this.props.history.push("/");
                this.props.updateSmurfs(res.data);
                console.log(res);
                console.log(res.data)
            })
            .catch(err=> {console.log(err)})
    }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Input className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </Input>
    );
  }
}


export default SmurfForm;
