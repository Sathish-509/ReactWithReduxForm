import React from 'react';
import HomePage from '../components/HomePage';
import { connect } from 'react-redux';

class HomePageContainer extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    troubleFormDetails: state.troubleFormDetails
  };
}

export default connect(
  mapStateToProps,
  null
)(HomePageContainer);
