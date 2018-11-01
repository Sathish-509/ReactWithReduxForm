import React from 'react';
import PropTypes from 'prop-types';

class TextAreaInput extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <textarea
          name={this.props.name}
          className={this.props.className}
          rows={this.props.rows}
          cols={this.props.cols}
          placeholder={this.props.placeholder}
          value={this.props.defaultValue}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextAreaInput;
