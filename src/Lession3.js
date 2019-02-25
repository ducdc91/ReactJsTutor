import React, { Component } from 'react';

class Lession3 extends Component {
  render() {
    return (
      <div>
         if (hasvacancy) {
         	Vacancy
         } else {
         	No Vacancy
         }

      </div>
    );
  }
}

let hasvacancy = true;

ReactDOM.render(<Lession3 hasvacancy={hasvacancy} />, document.getElementById('root'));
