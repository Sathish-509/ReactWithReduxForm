import React from 'react';
import Select from 'react-select';
import ReactDOM from 'react-dom';
import { isArray } from 'util';

class MultiSelect extends React.Component {
  constructor(props, context) {
    super(props, context);
    // MultiSelect is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value.
    this.state = {
      stayOpen: false,
      disabled: false,
      dropUp: false
    };
  }

  /* istanbul ignore next */
  componentDidMount() {}

  /* istanbul ignore next */
  componentWillReceiveProps(nextProps) {}

  /* istanbul ignore next */
  componentWillUnmount() {}

  buildOptionWithTitle(options) {
    let value = this.props.value;
    let isValidValue = !value;

    if (this.props.multi && value && value.length > 0) {
      isValidValue = false;
      value = JSON.parse(JSON.stringify(value));
    }

    if (options && isArray(options) && options.length > 0) {
      options.map(option => {
        option.title = option.label;
        if (this.props.multi && value && value.indexOf(option.value) > -1) {
          value.splice(value.indexOf(option.value), 1);
        } else if (value && value === option.value) {
          isValidValue = true;
        }
      });
      if (this.props.multi && value && value.length == 0) {
        isValidValue = true;
      }
    } else {
      isValidValue = true;
    }
    if (this.props.hasError && !isValidValue) {
      this.props.hasError(true);
    }
    return options;
  }

  /* istanbul ignore next */
  render() {
    const className = this.state.dropUp ? 'drop-up' : '';
    let clearable =
      this.props.clearable === undefined ? true : this.props.clearable;
    return (
      <div ref={this.props.name}>
        <Select
          deleteRemoves={false}
          backspaceRemoves={false}
          name={this.props.name}
          className={className}
          id={this.props.name}
          value={this.props.value}
          clearable={clearable}
          onChange={this.props.onChange}
          multi={this.props.multi}
          removeSelected={false}
          placeholder={this.props.placeholder}
          closeOnSelect={this.props.closeOnSelect}
          options={this.buildOptionWithTitle(this.props.options)}
          disabled={this.props.disabled}
          searchable={true}
        />
      </div>
    );
  }
}

export default MultiSelect;
