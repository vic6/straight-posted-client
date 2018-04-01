import React from 'react';

const Idea = ({ idea }) => (
  <div className="title" >
    <h3>{idea.title}</h3>
    <p>{idea.body}</p>
  </div>
);

export default Idea;
