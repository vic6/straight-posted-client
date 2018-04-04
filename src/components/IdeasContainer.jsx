import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';
import Idea from './Idea';
import IdeaForm from './IdeaForm';

export default class IdeasContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { ideas: [], editingIdeaId: null, notification: '' };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/api/v1/ideas.json')
      .then(response => {
        this.setState({ ideas: response.data });
      })
      .catch(err => console.log(err));
  }


  enableEditing = id => {
    this.setState({ editingIdeaId: id }, () => {
      this.title.focus();
    });
  };

  updateIdea = idea => {
    const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id);
    const ideas = update(this.state.ideas, { [ideaIndex]: { $set: idea } });
    this.setState({ ideas, notification: 'All changes saved' });
  };

  deleteIdea = id => {
    console.log('hi')
    axios
      .delete(`http://localhost:3001/api/v1/ideas/${id}`)
      .then(() => {
        const ideaIndex = this.state.ideas.findIndex(x => x.id === id);
        const ideas = update(this.state.ideas, { $splice: [[ideaIndex, 1]] });
        this.setState({ ideas });
      })
      .catch(error => console.log(error));
  };

  addNewIdea = () => {
    axios
    .post('http://localhost:3001/api/v1/ideas', { idea: { title: '', body: '' } })
    .then(response => {
      const ideas = update(this.state.ideas, {
        $splice: [[0, 0, response.data]]
      });
      this.setState({
        ideas,
        editingIdeaId: response.data.id
      });
    })
    .catch(err => console.log(err));
  };
  resetNotification = () => {
    this.setState({ notification: '' });
  };

  render() {
    const ideas = this.state.ideas.map(idea => {
      if (this.state.editingIdeaId === idea.id) {
        return (
          <IdeaForm
            idea={idea}
            key={idea.id}
            updateIdea={this.updateIdea}
            titleRef={input => (this.title = input)}
            resetNotification={this.resetNotification}
          />
        );
      }
      return (
        <Idea
          idea={idea}
          key={idea.id}
          enableEditing={this.enableEditing}
          onDelete={this.deleteIdea}
        />
      );
    });
    return (
      <div>
        <button onClick={this.addNewIdea} className="new-idea-button">
          New Note
        </button>
        <span>{this.state.notification}</span>
        <div>{ideas}</div>
      </div>
    );
  }
}
