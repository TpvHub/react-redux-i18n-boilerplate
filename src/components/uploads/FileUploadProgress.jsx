import React from 'react';
import PropTypes from 'prop-types';

class FileUploadProgress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  render() {
    return this.props.children(this.state.progress);
  }
}

FileUploadProgress.propTypes = {
  children: PropTypes.func
};

FileUploadProgress.defaultProps = {
  children: () => null
};

export default FileUploadProgress;