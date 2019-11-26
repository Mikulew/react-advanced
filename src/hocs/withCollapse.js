import React, { Component } from 'react';

const withCollapse = WrappedComponent => {
  return class withCollapse extends Component {
    state = {
      isCollapsed: true,
    };

    toggle = () => {
      this.setState(prevState => ({ isCollapsed: !prevState.isCollapsed }));
    };

    render() {
      const { isCollapsed } = this.state;

      return <WrappedComponent isCollapsed={isCollapsed} toggle={this.toggle} {...this.props} />;
    }
  };
};

export default withCollapse;
