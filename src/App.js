import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = {
  'name':'홍길동',
  'birthday':'880413',
  'gender':'남자',
  'job':'회사원'
}

class App extends Component {
  render() {
    return (
        <Customer
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
        /> 
    );
  }
}

export default App;
