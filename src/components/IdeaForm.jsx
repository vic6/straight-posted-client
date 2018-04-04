import React, { Component } from 'react';
import axios from 'axios';
// import update from 'immutability-helper';

export default class IdeaForm extends Component {
  state = {
    title: this.props.idea.title,
    body: this.props.idea.body
  };

  handleInput = e => {
    this.props.resetNotification();
    this.setState({ [e.target.name]: e.target.value });
  };

  updateValueOnBlur = () => {
    const idea = {
      title: this.state.title,
      body: this.state.body
    };
    axios
      .put(`http://localhost:3001/api/v1/ideas/${this.props.idea.id}`, { idea })
      .then(response => {
        this.props.updateIdea(response.data)
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="title">
        <form>
          <input
            onChange={this.handleInput}
            onBlur={this.updateValueOnBlur}
            className="input"
            type="text"
            name="title"
            placeholder="Enter a title"
            value={this.state.title}
            ref={this.props.titleRef}
          />
          <textarea
            onChange={this.handleInput}
            onBlur={this.updateValueOnBlur}
            className="input"
            name="body"
            placeholder="Enter your idea"
            value={this.state.body}
          />
        </form>
      </div>
    );
  }
}
