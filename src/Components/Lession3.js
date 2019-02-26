import React, { Component } from 'react';

class Lession3 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      	<h1>test</h1>
        {this.props.hasvacancy ? 'Vacancy' : 'No Vacancy'}
      </div>
    );
  }
}

export default Lession3;
