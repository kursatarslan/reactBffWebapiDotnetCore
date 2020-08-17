import React, { Component } from 'react';
import { Header, Icon, List,Form, Checkbox  } from 'semantic-ui-react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    values: [],
    value: ''
  };
  handleChange = (e : any, { value  } : any) => {
    console.log(e);
    this.setState({ value }) 
  }

  componentDidMount() {
    /*this.setState({ values: [
      {id: 1, name: 'Values 101'}, 
      {id: 2, name: 'Values 102'}]})
      */
     /*
     
        <Form>
        <Form.Field>
          Selected value: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Choose this'
            name='checkboxRadioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Or that'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
*/ 
    
    axios.get('http://localhost:7000/api/values').then(response => {
      console.log(response);
      this.setState({
        values: response.data
      });
    });
    
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Values</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
        
      </div>
    );
  }
}

export default App;
