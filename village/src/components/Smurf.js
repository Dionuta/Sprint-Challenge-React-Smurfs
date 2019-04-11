import React from 'react';
import axios from 'axios'; 
import styled from 'styled-components';


const Span = styled.span`
.remove-smurf {
  font-size: 1.15em;
  border: none;
  outline: none;
  visibility: hidden;
  color: #EF5350;
  cursor: pointer;
  margin: 0 10px 0 0;
  padding: 0;
  background: none;
  }
   
div:hover .remove-smurf {
  visibility: visible;
}
`

class Smurf extends React.Component{
   state = {
    show: false
   }  

   deleteItem = () => {
    axios
        .delete(`http://localhost:3333/smurfs/${this.props.id}`)
        .then(response => {
            this.props.updateSmurfs(response.data);
            this.props.history.push("/");
        })
        .catch(err => console.log(err));
};

  render() {
    return (
      <Span>
    <div className="Smurf">
      <span className='remove-smurf' onClick={this.deleteItem}>X</span>
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
    </div>
    </Span>
  );
};}
  

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

