import React, { Component } from 'react';
import classnames from 'classnames';
import PageLoader from 'app/components/page-loader';

class LoaderWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loaded) {
      this.hideTimeout = window.setTimeout(() => {
        this.setState({ hide: true });
      }.bind(this), 500);
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.hideTimeout);
  }

  render() {
    const { currentPage, loaded, viewportDimensions } = this.props;

    let renderLoader;
    if (this.state.hide) {
      renderLoader = (<div />);
    } else {
      renderLoader = (<PageLoader key="loader" pageId={currentPage} />);
    }

    const classes = classnames('loader-wrapper', `loader-wrapper-${currentPage}`, {
      hide: loaded
    });

    return (
      <div className={classes}>
        {renderLoader}
      </div>
    );
  }
};

export default LoaderWrapper;
