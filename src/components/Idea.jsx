import React, { Component } from 'react';

export default class Idea extends Component {
  editIdea = () => {
    this.props.enableEditing(this.props.idea.id);
  };
  render() {
    const { title, body } = this.props.idea;
    return (
      <div className="title">
        <span className='delete-button'>X</span>
        <h4 onClick={this.editIdea}>{title}</h4>
        <p onClick={this.editIdea}>{body}</p>
      </div>
    );
  }
}
