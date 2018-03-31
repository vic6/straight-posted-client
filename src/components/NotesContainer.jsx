import React, { Component } from 'react';
import axios from 'axios';

export default class NotesContainer extends Component {
  constructor(props) {
    super();
    this.state = {notes: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/vi/ideas.json')
    .then(res => {
      console.log(res);
      this.setState({notes: res.data});
    })
    .catch(err => console.log(err));
  }

  render() {
    return <div>{this.state.hi}</div>;
  }
}
