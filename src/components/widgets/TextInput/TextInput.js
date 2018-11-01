import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name={this.props.name}
          autoComplete="off"
          className={this.props.className}
          placeholder={this.props.placeholder}
          title={this.props.defaultValue}
          value={this.props.defaultValue}
          onChange={this.props.onChange}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default TextInput;
