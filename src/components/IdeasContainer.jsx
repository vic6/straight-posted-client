import React, { Component } from 'react';
import Idea from './Idea';
import axios from 'axios';
import update from 'immutability-helper';

export default class IdeasContainer extends Component {
  constructor(props) {
    super();
    this.state = { ideas: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/api/v1/ideas.json')
      .then(response => {
        this.setState({ ideas: response.data });
      })
      .catch(err => console.log(err));
  }

  addNewIdea() {
    axios
      .post('http://localhost:3001/api/v1/ideas', { idea: { title: 'sup', body: 'dude' } })
      .then(response => {git 
        this.setState((prevState) => {
          return { ideas: [...prevState.concat, response.data] };
        });

        console.log(response);
      })
      .catch(err => console.log(err));
  }

  render() {
    const ideas = this.state.ideas.map(idea => <Idea idea={idea} key={idea.id} />);
    return (
      <div>
        <button onClick={this.addNewIdea} className="new-idea-button">
          New Note
        </button>
        <div>{ideas}</div>
      </div>
    );
  }
}
