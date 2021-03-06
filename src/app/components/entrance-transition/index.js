import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class EntranceTransition extends Component {

  componentDidMount() {
    this.timeout = setTimeout(() => {
      ReactDOM.findDOMNode(this).classList.add('show');
    }, 10);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const classes = classnames('entrance-transition', this.props.className);
    
    return (
      <div className={classes}>{this.props.children}</div>
    );
  }
};

export default EntranceTransition;
