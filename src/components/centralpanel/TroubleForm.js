import React from 'react';
import TextInput from './../widgets/TextInput/TextInput';
import TextAreaInput from './../widgets/TextAreaInput/TextAreaInput';
import MultiSelect from './../widgets/MultiSelect/MultiSelect';
import CheckBoxList from './../widgets/CheckBoxList/CheckBoxList';
import { Button } from 'react-bootstrap';

export default class TroubleForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }
  handleNameChange() {}

  handleMultiSelect() {}
  render() {
    return (
      <div>
        <label>{'Name:'}</label>
        {
          <TextInput
            name={'Name'}
            defaultValue={this.state.name}
            onChange={this.handleNameChange.bind(this)}
          />
        }
        ,<label>{'PhoneNumber:'}</label>
        {
          <TextInput
            name={'PhoneNumber'}
            defaultValue={this.state.name}
            onChange={this.handleNameChange.bind(this)}
          />
        }
        ,<label>{'Email Address:'}</label>
        {
          <TextInput
            name={'Email Address'}
            defaultValue={this.state.name}
            onChange={this.handleNameChange.bind(this)}
          />
        }
        ,<label>{'CC Email Address:'}</label>
        {
          <TextInput
            name={'CC Email Address'}
            defaultValue={this.state.name}
            onChange={this.handleNameChange.bind(this)}
          />
        }
        ,<label>{'State Funded Building:'}</label>
        {
          <MultiSelect
            name={'State Funded Building'}
            value={{}}
            onChange={this.handleMultiSelect.bind(this)}
            placeholder={'Enter Building Name'}
            multi={false}
            closeOnSelect={false}
            options={[]}
          />
        }
        ,<label>{'Rooms(s) / Near Room:'}</label>
        {
          <TextInput
            name={'Rooms(s) / Near Room'}
            defaultValue={this.state.name}
            onChange={this.handleNameChange.bind(this)}
          />
        }
        ,<label>{'Type Of Location:'}</label>
        {
          <MultiSelect
            name={'Type Of Location'}
            value={{}}
            onChange={this.handleMultiSelect.bind(this)}
            placeholder={'Enter Type Of Location'}
            multi={false}
            closeOnSelect={false}
            options={[]}
          />
        }
        ,
        {
          <CheckBoxList
            name={'Countries'}
            getSelectedCheckboxesList={{}}
            checkBoxData={['test']}
            updatedList={[]}
          />
        }
        ,
        {
          <CheckBoxList
            name={'Countries'}
            getSelectedCheckboxesList={{}}
            checkBoxData={['test']}
            updatedList={[]}
          />
        }
        ,<label>{'Enter Brief Summary of Problem Here:'}</label>
        {
          <TextInput
            name={'Enter Brief Summary of Problem Here'}
            defaultValue={this.state.name}
            onChange={this.handleNameChange.bind(this)}
          />
        }
        ,<label>{'Provide More Detailed Description Below:'}</label>
        {
          <TextAreaInput
            name={'Enter Brief Summary of Problem Here'}
            defaultValue={this.state.name}
            onChange={this.handleNameChange.bind(this)}
          />
        }
        ,
        {
          <Button
            bsStyle="primary"
            bsSize="sm"
            onClick={() => this.setState({ show: true })}
            style={{ marginTop: '10px' }}
          >
            Submit Request
          </Button>
        }
        ,
        {
          <Button
            bsStyle="secondary"
            bsSize="sm"
            onClick={() => this.setState({ show: true })}
            style={{ marginTop: '10px' }}
          >
            ClearForm Button
          </Button>
        }
      </div>
    );
  }
}
