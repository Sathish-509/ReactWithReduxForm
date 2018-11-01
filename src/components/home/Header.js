import React from 'react';
import * as troubleFormActions from './../../actions/troubleFormActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="header">{'this is headedr'}</div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    listOfTroubleFormDetails: state.troubleFormDetails
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...troubleFormActions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
