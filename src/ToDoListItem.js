import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
      const {
          //1.5
          title,
          description,
          ...props
      } = this.props;
      //1.thêm title and description vào HTML 
    return (
      <div className="ToDoListItem"{...props}>
        <div className="ToDoListItem-title"></div>
        <div className="ToDoListItem-description"></div>
      </div>
    );
  }
}

export default ToDoListItem;