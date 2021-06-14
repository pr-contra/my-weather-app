import { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorWrapper } from './components/common';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  // componentDidCatch(error, errorInfo) {
  //   // In case you want to log the catched error externaly
  //   // logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      return <ErrorWrapper>{this.state.errorMessage}</ErrorWrapper>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
